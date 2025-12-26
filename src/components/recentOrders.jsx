import { formatCurrency } from "../utils/currencyFormater";
import { formatDistanceToNow } from "date-fns";
import { useLoading } from "../contexts/loading";

import CtaButton from "./ctaButton";
import Heading from "./heading";
import Loader from "./loader";

const handleTracking = id => {
    console.log(id);
};

const RecentOrders = ({ orders }) => {
    const { loadingSomething } = useLoading();
    if (loadingSomething) {
        return <Loader />;
    }
    return (
        <div className="py-8">
            <Heading text="Recent orders" />
            <p>Past orders you can track.</p>

            <div className="grid gap-5 grid-cols-1 py-5">
                {orders.map(order => {
                    const {
                        orderId,
                        deliveryStatus,
                        totalAmount,
                        orderedItems,
                        createdAt,
                        date
                    } = order || {};

                    const createdDate = formatDistanceToNow(
                        createdAt.toLocaleDateString(),
                        {addSuffix: true}
                    );

                    const totalItems = orderedItems?.length;

                    return (
                        <div
                            key={orderId}
                            className="rounded-md p-2 odd:bg-gray-100 ring
                            ring-gray-100"
                        >
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="uppercase font-semibold">
                                        {orderId}
                                    </h1>
                                    <h1>{createdDate}</h1>
                                </div>
                                <h1 className="capitalize">{deliveryStatus}</h1>
                            </div>
                            <div className="py-5 flex">
                                {orderedItems.slice(0, 3).map(order => (
                                    <div
                                        key={order.id}
                                        className="flex flex-col items-center
                                    justify-center"
                                    >
                                        <img
                                            src={order.image}
                                            className="size-12 rounded-full"
                                        />
                                        <h1>x{order.quantity}</h1>
                                    </div>
                                ))}
                                {orderedItems.length > 3 && (
                                    <div
                                        className="size-12 bg-primary-light flex
                                        items-center justify-center
                                rounded-full"
                                    >
                                        <h1 className="text-primary-normal font-extrabold">
                                            +{orderedItems.length - 3}
                                        </h1>
                                    </div>
                                )}
                            </div>
                            <div className="grid grid-cols-2 gap-y-4 py-3">
                                <h3 className="font-bold">
                                    {formatCurrency(totalAmount)}
                                </h3>
                                <h3 className="">
                                    {totalItems}{" "}
                                    {totalItems <= 1
                                        ? "item ordered"
                                        : "items ordered"}
                                </h3>
                                <CtaButton
                                    type="primary"
                                    data={orderId}
                                    handler={handleTracking}
                                    text="Track Order"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentOrders;
