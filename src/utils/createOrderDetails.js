import { v4 as uuidv4 } from "uuid";
import uniqid from "uniqid";

import { useAuth } from "../contexts/auth";
import { useCart } from "../contexts/cart";

const paystackKey = import.meta.env.VITE_PAYSTACK_KEY;

export const createOrderDetails = (userDetails) => {
  const {
    email,
    fullName,
    phoneNumber,
    street,
    note,
    subTotal,
    userId,
    orderedItems,
    onSuccess,
    onClose,
  } = userDetails;

  const [firstname, lastname] = fullName.split(" ");

  return {
    key: paystackKey,
    email,
    amount: subTotal * 100,
    ref: uuidv4(),
    currency: "NGN",
    firstname,
    lastname,
    phone: phoneNumber,
    label: "Checkout - leesLagos",
    onSuccess,
    onClose,
    metadata: {
      orderId: uniqid("order-"),
      customerId: userId,
      cartItems: orderedItems,
      shippingAddress: street,
      extraNotes: note.trim(),
    },
  };
};
