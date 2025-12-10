import PaystackPop from "@paystack/inline-js";

export const paystackInstance = new PaystackPop();

export function checkoutFun(datas) {
  
  paystackInstance.newTransaction({ ...datas });
}
