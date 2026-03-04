// api/verify.js
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { reference, expectedAmount } = req.body;

    try {
        const response = await fetch(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            }
        );

        const result = await response.json();

        if (result.status && result.data.status === "success") {
            // Paystack amounts are in Kobo/Cents (Amount * 100)
            const actualAmountPaid = result.data.amount / 100;

            if (actualAmountPaid >= expectedAmount) {
                console.log(actualAmountPaid);
                console.log(expectedAmount);
                return res.status(200).json({
                    verified: true,
                    data: result.data
                });
            } else {
                return res.status(400).json({
                    verified: false,
                    message: "Amount mismatch detected."
                });
            }
        }

        return res
            .status(400)
            .json({ verified: false, message: "Transaction not successful." });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
