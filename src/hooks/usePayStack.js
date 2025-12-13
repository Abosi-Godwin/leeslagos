import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createOrderDetails } from "../utils/createOrderDetails";
import { createDbDatas } from "../utils/createDbDatas";
import { initiateCheckout } from "../utils/checkout";
import { useFireStore } from "./useFireStore";
import { useCart } from "../contexts/cart";

export function usePayStack() {
  let orderDatas = null;
  const navigate = useNavigate();

  const { addOrders } = useFireStore();
  const { dispatch } = useCart();

  const onClose = () => {
    toast.error("Payment cancelled.");
  };

  const checkoutOrderFun = (userDetails) => {
    const onSuccess = async (transaction) => {
      navigate("/ordered", {
        state: {
          reference: transaction.reference,
          status: transaction.status,
          message: transaction.message,
          customerAndOrderDatas: orderDatas,
        },
      });

      queueMicrotask(() => {
        const docDatas = createDbDatas(userDetails, orderDatas);
        addOrders(docDatas).then(() => dispatch({ type: "clear" }));
      });
    };

    const orderDetails = createOrderDetails({ ...userDetails, onSuccess, onClose });

    if (orderDetails.ref) {
      const { ref, amount, email, date, firstname, lastname, phone, metadata } = orderDetails;

      orderDatas = {
        ref,
        amount,
        email,
        date,
        firstname,
        lastname,
        phone,
        metadata,
      };
    }
    initiateCheckout(orderDetails);
  };

  return { checkoutOrderFun };
}
