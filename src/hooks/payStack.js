import toast from "react-hot-toast";
import { createOrderDetails } from "../utils/createOrderDetails";
import { checkoutFun } from "../utils/checkout";

import { Navigate } from "react-router-dom";
const onSuccess = (transaction) => {
  if (transaction.status === "success") {
    Navigate("/cart");
  }
};

const onClose = () => {
  toast.success("Payment cancelled.");
};

export function checkoutOrderFun(userDetails) {
  const orderDetails = createOrderDetails({ ...userDetails, onSuccess, onClose });
  const makeCheckOut = checkoutFun(orderDetails);
}
