import { serverTimestamp } from "firebase/firestore";

export const createDbDatas = (userDetails, orderDatas) => {
  const { email, fullName, phoneNumber, street, note, subTotal, userId, orderedItems } =
    userDetails;
  const { metadata, ref, amount } = orderDatas;

  return {
    orderId: metadata?.orderId,
    userId,
    status: "paid",
    paymentMethod: "paystack",
    paymentRef: ref,
    fullName,
    email,
    phoneNumber,
    street,
    note,
    subTotal: amount / 100,
    shippingFee: 0,
    totalAmount: amount / 100,
    currency: "NGN",
    orderedItems,
    deliveryStatus: "pending",
    createdAt: serverTimestamp(),
    paidAt: serverTimestamp(),
    verificationStatus: "verified",
  };
};
