import { collection, doc, setDoc } from "firebase/firestore";
import { fireStore } from "../firebase/config";

export function useFireStore() {
  const ordersCollection = collection(fireStore, "orders");
  const getOrders = () => ordersCollection;

  const addOrders = (docDatas) => {
    const orderRef = doc(ordersCollection, docDatas.orderId);
    return setDoc(orderRef, docDatas);
  };

  return { getOrders, addOrders };
}
