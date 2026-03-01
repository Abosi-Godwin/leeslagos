import { useEffect } from "react";

import { useSearchParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoadingSomething } from "../hooks/useLoading";
import { useFireStore } from "../hooks/useFireStore";

import toast from "react-hot-toast";

import Input from "../components/input";
import Button from "../components/button";

import VerticalOrderStepper from "../components/verticalStepper";
import OrderOverview from "../components/orderOverview";
import OrderNotFound from "../components/orderNotFound";

import TrackOrderStatus from "../components/trackOrderStatus";

import OrderSupport from "../components/orderSupport";
import RecentOrders from "../components/recentOrders";
import MiniLoader from "../components/miniLoader";
import NotTrackingYet from "../components/notTracking";
import NavBar from "../components/navBar";

import Footer from "../sections/footer";

const TrackOrder = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { orders, trackingOrder, getOrder } = useFireStore();

    const [searchParams, setSearchParams] = useSearchParams();

    const { loadingSomething } = useLoadingSomething();

    const orderId = searchParams.get("orderId");

    const { deliveryStatus, orderedItems } = trackingOrder || {};

    const submitForm = trackingDetails => {
        const { orderId } = trackingDetails;

        if (!orderId || orderId === undefined || orderId.length <= 13) {
            toast.error("Check your order ID.");
            return;
        }
        setSearchParams({ orderId: orderId });
        reset();
    };

    const totalOrders = orders?.length;

    const notSearchedYet = trackingOrder === undefined && !loadingSomething;

    const orderNotFound = trackingOrder === "Not found";

    const searchedOrder = trackingOrder?.orderId;

    const startTracking = id => {
        setSearchParams({ orderId: id });
    };

    useEffect(() => {
        if (!orderId || orderId.length <= 13) {
            toast.error("Check your order ID.");
            return;
        }
        getOrder(orderId);
    }, [orderId]);

    return (
        <>
            <NavBar />
            <div className="py-10 px-5">
                <div>
                    <h1 className="text-xl font-bold">Track Your Order </h1>
                    <p className="text-sm tracking-tight">
                        Monitor your order progress in real-time.
                    </p>

                    <form
                        onSubmit={handleSubmit(submitForm)}
                        className="py-8 grid grid-cols-1 gap-1.5 "
                    >
                        <div>
                            <Input
                                valType="orderId"
                                label="Order ID"
                                inputType="text"
                                placeholder="Enter your order id..."
                                className="p-3 rounded-md outline-0 border w-full"
                                disable={false}
                                register={register}
                            />
                        </div>
                        <Button
                            text="start tracking"
                            type="submit"
                            disabled={loadingSomething}
                            loader={false}
                        />
                        <p className="text-sm tracking-tight">
                            Get your orderId from your email.
                        </p>
                    </form>
                </div>

                {loadingSomething ? <MiniLoader /> : ""}

                {orderNotFound && <OrderNotFound />}

                {searchedOrder && (
                    <div>
                        <VerticalOrderStepper currentStatus={deliveryStatus} />

                        <OrderOverview orderDatas={trackingOrder} />

                        <TrackOrderStatus items={orderedItems} />
                    </div>
                )}

                {notSearchedYet && <NotTrackingYet noOders={totalOrders < 1} />}

                {totalOrders >= 1 && (
                    <RecentOrders
                        orders={orders.slice(0, 5)}
                        track={startTracking}
                    />
                )}

                <OrderSupport />
            </div>
            <Footer />
        </>
    );
};

export default TrackOrder;
