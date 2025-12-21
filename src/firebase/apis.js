import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where
} from "firebase/firestore";

import { fireStore } from "../firebase/config";

const ordersCollection = collection(fireStore, "orders");


const fetchUserOrdersApi = async userId => {
    const ordersRef = collection(fireStore, "orders");
    const q = query(ordersRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => {
        const data = doc.data();

        return {
            ...data,
            id: doc.id,
            createdAt: data.createdAt?.toDate() ?? null,
            paidAt: data.paidAt?.toDate() ?? null
        };
    });
};
const addOrdersApi = async docDatas => {
    const orderRef = doc(ordersCollection, docDatas.orderId);
    await setDoc(orderRef, docDatas);
    return docDatas.orderId;
};

const getOrdersApi = async orderId => {
    const orderRef = doc(fireStore, "orders", orderId);
    const orderSnap = getDoc(orderRef);
    if (!orderSnap.exists()) {
        return "Not found";
    }
    const orderData = orderSnap.data();
    return orderData;
};
export { fetchUserOrdersApi, addOrdersApi, getOrdersApi };
