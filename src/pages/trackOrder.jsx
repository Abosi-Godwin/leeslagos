import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoading } from "../contexts/loading";
import { useFireStore } from "../hooks/useFireStore";

import Input from "../components/input";
import Button from "../components/button";

import VerticalOrderStepper from "../components/verticalStepper";
import OrderOverview from "../components/orderOverview";

import TrackOrderStatus from "../components/trackOrderStatus";

import OrderSupport from "../components/orderSupport";
import RecentOrders from "../components/recentOrders";
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

    const { loadingSomething } = useLoading();

    const {
        orders,
        addOrders,
        trackingOrder,
        getOrder,
        isAddingOrder,
        ordersLoading
    } = useFireStore();

    const { deliveryStatus, orderedItems } = trackingOrder || {};

    const submitForm = trackingDetails => {
        const { orderId } = trackingDetails;
        getOrder(orderId);
        reset();
    };

    const totalOrders = orders?.length;

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

                {trackingOrder ? (
                    <div>
                        <VerticalOrderStepper currentStatus={deliveryStatus} />

                        <OrderOverview orderDatas={trackingOrder} />

                        <TrackOrderStatus items={orderedItems} />
                    </div>
                ) : (
                    <NotTrackingYet noOders={totalOrders < 1} />
                )}

                {totalOrders >= 1 && <RecentOrders orders={orders} />}

                <OrderSupport />
            </div>
            <Footer />
        </>
    );
};

export default TrackOrder;
