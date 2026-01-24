import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoadingSomething } from "../hooks/useLoading";
import { useFireStore } from "../hooks/useFireStore";

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

    const { loadingSomething } = useLoadingSomething();

    const {
        orders,
        addOrders,
        trackingOrder,
        getOrder,
        isAddingOrder,
        isGettingOrder,
        ordersLoading
    } = useFireStore();

    const { deliveryStatus, orderedItems } = trackingOrder || {};

    const submitForm = trackingDetails => {
        const { orderId } = trackingDetails;

        if (orderId === undefined || orderId.length <= 0) return;

        getOrder(orderId);
        reset();
    };

    const totalOrders = orders?.length;
    const notSearchedYet = trackingOrder === undefined && !isGettingOrder;
    const orderNotFound = trackingOrder === "Not found";
    const searchedOrder = trackingOrder?.orderId;

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
                            disabled={false}
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

                {totalOrders >= 1 && <RecentOrders orders={orders.slice(0, 5)} />}

                <OrderSupport />
            </div>
            <Footer />
        </>
    );
};

export default TrackOrder;
