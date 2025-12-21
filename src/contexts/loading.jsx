import { createContext, useContext } from "react";
import { useLoadingSomething } from "../hooks/useLoading";

const LoadingContext = createContext();
const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
    const { loadingSomething } = useLoadingSomething();

    return (
        <LoadingContext.Provider value={{ loadingSomething }}>
            {children}
        </LoadingContext.Provider>
    );
};

export { LoadingProvider, useLoading };
