import React from "react";

import sgMail from "@sendgrid/mail";

import { renderToBuffer } from "@react-pdf/renderer";
import ReceiptPDF from "../src/assets/ReceiptPdf";

// Set SendGrid API Key
if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY is missing!");
    return;
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendReceipt = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { details } = req.body;

        // Validate data
        if (!details || !details.email || !details.orderId) {
            return res
                .status(400)
                .json({ error: "Missing required details (email or orderId)" });
        }

        // 1️⃣ Generate PDF buffer dynamically
        const pdfBuffer = await renderToBuffer(
            React.createElement(ReceiptPDF, { data: details })
        );
        
        console.log("PDF Buffer size:", pdfBuffer.length);
        
        
        // 2️⃣ Convert buffer to Base64 for SendGrid
        const pdfBase64 = pdfBuffer.toString("base64");
        console.log(pdfBase64.substring(0, 50));
        const trackingUrl = `https://leeslagos.vercel.app/trackOrder?orderId=${details.orderId}`;

        // 3️⃣ Build email message with PDF attachment
        const msg = {
            to: details.email,
            from: "bbnl6060@gmail.com", // ideally use your domain email
            subject: `Your Receipt for — Order #${details.orderId}`,
            text: `Hello ${details.fullName},\n\nYour payment has been confirmed! Please see attached receipt.`,
            html: `<p>Hello <strong>${details.fullName}</strong>,</p>
                   <p>Your payment has been confirmed! Please see attached receipt.</p>
                   <p><a href="${trackingUrl}">Track Your Order</a></p>`,
            attachments: [
                {
                    content: pdfBase64,
                    filename: `Receipt-${details.orderId}.pdf`,
                    type: "application/pdf",
                    disposition: "attachment"
                }
            ]
        };

        // 4️⃣ Send email
        await sgMail.send(msg);

        return res
            .status(200)
            .json({ success: true, message: "Receipt sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);

        if (error.response) {
            console.error("SendGrid error:", error.response.body);
        }

        return res.status(500).json({ error: "Failed to send email receipt" });
    }
};

export default sendReceipt;
