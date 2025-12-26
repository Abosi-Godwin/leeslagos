import { createContext, useContext } from "react";

import { useFireStore } from "../hooks/useFireStore";
import { useAuth } from "./auth";

const LoadingContext = createContext();
const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
    const { isAddingOrder, ordersLoading, isGettingOrder } = useFireStore();

    const { loading } = useAuth();

    const loadingSomething =
        loading | isAddingOrder | ordersLoading | isGettingOrder;

    return (
        <LoadingContext.Provider value={{ loadingSomething }}>
            {children}
        </LoadingContext.Provider>
    );
};

export { LoadingProvider, useLoading };
