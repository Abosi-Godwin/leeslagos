import { useCallback, useState } from "react";
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
    const [isProcessing, setIsProcessing] = useState(false);

    const checkoutOrderFun = useCallback(
        async userDetails => {
            setIsProcessing(true);
            const orderDetails = createOrderDetails({ ...userDetails });
            const { subTotal } = orderDetails;

            const onClose = () => {
                setIsProcessing(false);
                toast.error("Payment cancelled.");
            };

            const onSuccess = async transaction => {
                const loadingToast = toast.loading("Verifying transaction...");

                try {
                    // 1. Server-side Verification
                    const verifyRes = await fetch("/api/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            reference: transaction.reference,
                            expectedAmount: subTotal
                        })
                    });

                    const verification = await verifyRes.json();

                    if (
                        !verification?.verified ||
                        verification?.data?.status != "success"
                    ) {
                        throw new Error(
                            verification.message ||
                                "Payment verification failed."
                        );
                    }

                    // 2. Save to Firestore
                    const docDatas = createDbDatas(userDetails, orderDetails);
                    await addOrders(docDatas);

                    // 3. Cleanup & Navigation
                    dispatch({ type: "clear" });
                    toast.success("Order placed successfully!", {
                        id: loadingToast
                    });

                    // Fire-and-forget receipt (don't block the UI)
                    fetch("/api/sendReceipt", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ details: { ...transaction,
                        ...userDetails } })
                    }).catch(err =>
                        console.error("Background Receipt Error:", err)
                    );

                    navigate(`/orderSummary${transaction.redirecturl}}`, {
                        state: {
                            reference: transaction.reference,
                            status: transaction.status,
                            message: transaction.message,
                            customerAndOrderDatas: orderDetails
                        }
                    });
                } catch (error) {
                    console.error("Post-Payment Error:", error);
                    toast.error(error.message, { id: loadingToast });
                } finally {
                    setIsProcessing(false);
                }
            };

            initiateCheckout({ ...orderDetails, onSuccess, onClose });
        },
        [navigate, addOrders, dispatch]
    );

    return { checkoutOrderFun, isProcessing };
}
