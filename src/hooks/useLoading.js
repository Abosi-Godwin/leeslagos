/*import { useFireStore } from "./useFireStore";
import { useAuth } from "../contexts/auth";

export const useLoadingSomething = () => {
    const { isAddingOrder, ordersLoading, isGettingOrder } = useFireStore();

    const { loading } = useAuth();

    const loadingSomething =
        loading | isAddingOrder | ordersLoading | isGettingOrder;

    return { loadingSomething };
};
*/