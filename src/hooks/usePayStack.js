import { useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createOrderDetails } from "../utils/createOrderDetails";
import { createDbDatas } from "../utils/createDbDatas";
import { initiateCheckout } from "../utils/checkout";
import { useFireStore } from "./useFireStore";
import { useCart } from "../contexts/cart";

export function usePayStack() {
    const navigate = useNavigate();

    const { addOrders } = useFireStore();
    const { dispatch } = useCart();

    const checkoutOrderFun = useCallback(
        async userDetails => {
            // 1. Generate local order details
            const orderDetails = createOrderDetails({ ...userDetails });

            const { amount, subTotal, ref } = orderDetails;

            const onClose = () => {
                toast.error("Payment cancelled.");
            };

            const onSuccess = async transaction => {
                const loadingToast = toast.loading("Verifying transaction...");

                try {
                    // 2. Verify with Vercel Serverless Function
                    const verifyRes = await fetch("/api/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            reference: transaction.reference,
                            expectedAmount: subTotal // Safety check
                        })
                    });

                    const verification = await verifyRes.json();

                    if (verification) {
                        // 3. Save to Firestore (Server verification passed)
                        const docDatas = createDbDatas(
                            userDetails,
                            orderDetails
                        );
                        await addOrders(docDatas);

                        // 4. Update UI state
                        dispatch({ type: "clear" });
                        toast.success("Order placed successfully!", {
                            id: loadingToast
                        });

                        navigate("/orderSummary", {
                            state: {
                                reference: transaction.reference,
                                status: "success",
                                customerAndOrderDatas: orderDetails
                            }
                        });
                    } else {
                        throw new Error(
                            verification.message || "Verification failed"
                        );
                    }

                    try {
                        const sendReceipt = await fetch("/api/sendReceipt", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                details: transaction
                            })
                        });
                        const sendingReceipt = await sendReceipt.json();
                        console.log(sendingReceipt);
                    } catch (err) {
                        console.error("Receipt error:", err);

                        toast.error(
                            error.message || "Could not send receipt.",
                            {
                                id: loadingToast
                            }
                        );
                    }
                } catch (error) {
                    console.error("Payment Error:", error);
                    toast.error(error.message || "Could not verify payment.", {
                        id: loadingToast
                    });
                }
            };

            // 5. Trigger Paystack Modal
            initiateCheckout({
                ...orderDetails,
                onSuccess,
                onClose
            });
        },
        [navigate, addOrders, dispatch]
    );

    return { checkoutOrderFun };
}
