import { collection, doc, setDoc } from "firebase/firestore";
import { fireStore } from "../firebase/config";

export function useFireStore() {
  const ordersCollection = collection(fireStore, "orders");
  const getOrders = () => ordersCollection;

  const addOrders = async (docDatas) => {
    const orderRef = doc(ordersCollection, docDatas.orderId);
    const addedOrder = await setDoc(orderRef, docDatas);
    console.log(addedOrder);
    return addedOrder;
  };

  return { getOrders, addOrders };
}
