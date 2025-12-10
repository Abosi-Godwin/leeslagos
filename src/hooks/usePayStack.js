import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createOrderDetails } from "../utils/createOrderDetails";
import { checkoutFun } from "../utils/checkout";
let orderDatas = null;

export function usePayStack() {
  const navigate = useNavigate();

  const onClose = () => {
    toast.success("Payment cancelled.");
  };

  const checkoutOrderFun = (userDetails) => {
    const onSuccess = (transaction) => {
      if (transaction?.status === "success") {
        navigate("/ordered", {
          state: {
            reference: transaction.reference,
            status: transaction.status,
            message: transaction.message,
            customerAndOrderDatas: orderDatas,
          },
        });
      }
    };

    const orderDetails = createOrderDetails({ ...userDetails, onSuccess, onClose });
    if (orderDetails.ref) {
      const {
        ref,
        amount,
        email,
        firstname,
        lastname,
        phone,
        metadata,
      
      } = orderDetails;

      orderDatas = {
       ref,
        amount,
        email,
        firstname,
        lastname,
        phone,
        metadata,
      };
    }

    checkoutFun(orderDetails);
  };

  return { checkoutOrderFun };
}
