import sgMail from "@sendgrid/mail";

// Ensure the API key exists
if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY is missing!");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/*
{
  reference: 'c29d813f-6f09-4c2b-bb45-2d99bbde3b1f',
  trans: '5912074173',
  status: 'paid',
  message: 'Approved',
  transaction: '5912074173',
  trxref: 'c29d813f-6f09-4c2b-bb45-2d99bbde3b1f',
  redirecturl: '?trxref=c29d813f-6f09-4c2b-bb45-2d99bbde3b1f&reference=c29d813f-6f09-4c2b-bb45-2d99bbde3b1f',
  orderId: 'order-mmgnuqd3',
  userId: 'nTpOBTUsKPNLN7R1lCRKz7VbSru2',
  paymentMethod: 'paystack',
  paymentRef: 'c29d813f-6f09-4c2b-bb45-2d99bbde3b1f',
  fullName: 'Abosi Magret ',
  email: 'alagabee6@gmail.com',
  phoneNumber: '9066016591',
  street: '4489 Forest Avenue Garden City, NY 11530',
  note: 'Okay thanks for asking. ',
  subTotal: 32000,
  shippingFee: 0,
  totalAmount: 32000,
  currency: 'NGN',
  orderedItems: [
    {
      id: 4,
      tag: 'Lattafa',
      name: 'Ameer al oudh',
      description: 'A product by Lattafa',
      price: 32000,
      category: 'perfume',
      image: '/products/1757751406.jpeg',
      inStock: true,
      details: [Object],
      quantity: 1
    }
  ],
  deliveryStatus: 'pending',
  createdAt: { _methodName: 'serverTimestamp' },
  paidAt: { _methodName: 'serverTimestamp' },
  verificationStatus: 'verified'
}
*/
const sendReceipt = async (req, res) => {
    // 1. Return a clear error message for wrong methods

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { details } = req.body;
        console.log(details);
        // 2. Validate the incoming data to prevent crashes
        if (!details) {
            return res
                .status(400)
                .json({ error: "Missing required details (email or id)" });
        }
        const trackingUrl = `https://leeslagos.vercel.app/trackOrder?orderId=${details.orderId}`;

        const msg = {
            to: details.email,
            from: "bbnl6060@gmail.com",
            subject: `Official Receipt — Order #${details.orderId}`,
            text: `
Hello ${details.fullName},

Thank you for shopping with us. Your payment has been successfully confirmed and your order is now being processed.

━━━━━━━━━━━━━━━━━━
ORDER INFORMATION
━━━━━━━━━━━━━━━━━━
Order ID: ${details.orderId}
Transaction Reference: ${details.paymentRef}
Payment Method: ${details.paymentMethod}
Payment Status: ${details.status.toUpperCase()}

Items Purchased:
${details.orderedItems
    .map(
        item =>
            `• ${item.name} (${item.tag}) × ${item.quantity} — ₦${item.price.toLocaleString()}`
    )
    .join("\n")}

━━━━━━━━━━━━━━━━━━
PAYMENT SUMMARY
━━━━━━━━━━━━━━━━━━
Subtotal: ₦${details.subTotal.toLocaleString()}
Shipping Fee: ₦${details.shippingFee.toLocaleString()}
Total Amount Paid: ₦${details.totalAmount.toLocaleString()}

━━━━━━━━━━━━━━━━━━
DELIVERY DETAILS
━━━━━━━━━━━━━━━━━━
Address: ${details.street}
Phone: ${details.phoneNumber}

Track your order:
${trackingUrl}

If you have any questions, simply reply to this email.

Thank you for choosing us.
`,
            html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; color: #333;">
    
    <h2 style="text-align:center; color:#111;">Payment Receipt</h2>
    <p style="text-align:center; font-size:14px; color:#666;">
      This is an official confirmation of your payment.
    </p>

    <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

    <p>Hello <strong>${details.fullName}</strong>,</p>
    <p>Your payment has been successfully confirmed and your order is now being processed.</p>

    <h3 style="border-bottom:1px solid #eee; padding-bottom:8px;">Order Information</h3>
    <table style="width:100%; border-collapse: collapse; font-size:14px;">
      <tr><td style="padding:6px 0;"><strong>Order ID:</strong></td><td>${details.orderId}</td></tr>
      <tr><td style="padding:6px 0;"><strong>Transaction Ref:</strong></td><td>${details.paymentRef}</td></tr>
      <tr><td style="padding:6px 0;"><strong>Payment Method:</strong></td><td style="text-transform:capitalize;">${details.paymentMethod}</td></tr>
      <tr><td style="padding:6px 0;"><strong>Status:</strong></td><td style="color:green;"><strong>${details.status}</strong></td></tr>
    </table>

    <h3 style="border-bottom:1px solid #eee; padding-bottom:8px; margin-top:24px;">Items Purchased</h3>
    <table style="width:100%; border-collapse: collapse; font-size:14px;">
      ${details.orderedItems
          .map(
              item => `
        <tr>
          <td style="padding:8px 0;">
            ${item.name} <span style="color:#777;">(${item.tag})</span><br/>
            <span style="color:#777;">Quantity: ${item.quantity}</span>
          </td>
          <td style="text-align:right;"><strong>₦${item.price.toLocaleString()}</strong></td>
        </tr>
      `
          )
          .join("")}
    </table>

    <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

    <h3 style="border-bottom:1px solid #eee; padding-bottom:8px;">Payment Summary</h3>
    <table style="width:100%; border-collapse: collapse; font-size:14px;">
      <tr><td style="padding:6px 0;">Subtotal</td><td style="text-align:right;">₦${details.subTotal.toLocaleString()}</td></tr>
      <tr><td style="padding:6px 0;">Shipping Fee</td><td style="text-align:right;">₦${details.shippingFee.toLocaleString()}</td></tr>
      <tr style="font-size:16px;"><td style="padding:8px 0;"><strong>Total Paid</strong></td><td style="text-align:right;"><strong>₦${details.totalAmount.toLocaleString()}</strong></td></tr>
    </table>

    <h3 style="border-bottom:1px solid #eee; padding-bottom:8px; margin-top:24px;">Delivery Details</h3>
    <p style="margin:6px 0;"><strong>Address:</strong> ${details.street}</p>
    <p style="margin:6px 0;"><strong>Phone:</strong> ${details.phoneNumber}</p>

    <div style="text-align:center; margin:30px 0;">
      <a href="${trackingUrl}" 
         style="background:#111; color:#fff; padding:12px 22px; text-decoration:none; border-radius:6px; display:inline-block;">
         Track Your Order
      </a>
    </div>

    <p style="font-size:13px; color:#777; text-align:center;">
      If you have any questions, reply to this email and we’ll be happy to help.
    </p>

    <p style="text-align:center; font-size:13px; color:#999;">
      Thank you for shopping with us.
    </p>

  </div>
  `
        };
        console.log(msg);
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
