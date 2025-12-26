import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
    fetchUserOrdersApi,
    addOrdersApi,
    getOrdersApi
} from "../firebase/apis";
import { useAuth } from "../contexts/auth";

export function useFireStore() {
    const { auth } = useAuth();

    const userId = auth?.currentUser?.uid;

    const {
        mutate: addOrders,
        data: addedOrder,
        error: orderError,
        isPending: isAddingOrder,
        isError: isOrderError
    } = useMutation({
        mutationFn: addOrdersApi
    });

    const {
        mutate: getOrder,
        data: trackingOrder,
        error: getOrderError,
        isPending: isGettingOrder,
        isError: isGetOrderError
    } = useMutation({
        mutationFn: getOrdersApi
    });

    const { data: orders, isPending: ordersLoading } = useQuery({
        queryKey: [userId],
        queryFn: () => fetchUserOrdersApi(userId),
        enabled: !!userId
    });

    return {
        orders,
        addOrders,
        trackingOrder,
        getOrder,
        isAddingOrder,
        ordersLoading
    };
}
