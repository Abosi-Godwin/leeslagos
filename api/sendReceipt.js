import sgMail from "@sendgrid/mail";

// Ensure the API key exists
if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY is missing!");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendReceipt = async (req, res) => {
    // 1. Return a clear error message for wrong methods
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { details } = req.body;
console.log(details);
        // 2. Validate the incoming data to prevent crashes
        if (!details || !details.email || !details.id) {
            return res
                .status(400)
                .json({ error: "Missing required details (email or id)" });
        }

        const msg = {
            to: details.email,
            // 3. IMPORTANT: Use a verified sender domain, not a @gmail.com address
            from: "verified-sender@yourdomain.com",
            subject: `Receipt for #${details.id}`,
            text: "Your order was successful",
            html: "<strong>Your order was successful</strong>"
        };

        // 4. Await the send operation
        await sgMail.send(msg);

        // 5. Send a success response back to the client
        return res
            .status(200)
            .json({ success: true, message: "Receipt sent successfully" });
    } catch (error) {
        // 6. Catch and handle errors gracefully
        console.error("Error sending email:", error);

        if (error.response) {
            console.error("SendGrid specific error:", error.response.body);
        }

        return res.status(500).json({ error: "Failed to send email receipt" });
    }
};

export default sendReceipt;
