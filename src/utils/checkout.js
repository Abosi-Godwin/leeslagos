import PaystackPop from "@paystack/inline-js";

export const paystackInstance = new PaystackPop();

export function initiateCheckout(datas) {
  paystackInstance.newTransaction({ ...datas });
}
