import { formatCurrency } from "../utils/currencyFormater";

import ItemValList from "./itemValList";

const OrderOverview = ({ orderDatas }) => {
    const {
        deliveryStatus,
        totalAmount,
        subTotal,
        paymentMethod,
        status,
        shippingFee,
        userId,
        orderId,
        fullName,
        note,
        phoneNumber,
        street,
        date,
        paidAt,
        createdAt
    } = orderDatas || {};
    
    const overview = [
        { label: "Order ID", value: orderId },
        { label: "Ordered date", value: orderId },
        { label: "Delivery status", value: deliveryStatus },
        { label: "Payment method", value: paymentMethod },
        { label: "Payment status", value: status }
    ];
    const customerInfo = [
        { label: "Full name", value: fullName },
        { label: "Phone number", value: phoneNumber },
        { label: "Address", value: street },
        { label: "Note", value: note }
    ];
    const priceInfo = [
        { label: "Sub total", value: formatCurrency(subTotal) },
        { label: "Delivery fee", value: formatCurrency(shippingFee) },
        { label: "Total amount", value: formatCurrency(totalAmount) }
    ];

    const deliveryInfo = [
        { label: "Method", value: "Home delivery" },
        { label: "Address", value: street },
        { label: "Contact", value: phoneNumber }
    ];
    const timelineInfo = [
        { label: "Order placed", value: phoneNumber },
        { label: "Payment confirmed", value: phoneNumber },
        { label: "Order processed", value: phoneNumber },
        { label: "Shipped", value: deliveryStatus },
        { label: "Delivered", value: deliveryStatus }
    ];
    const deliveryTag =
        "Please ensure your phone number is reachable for delivery updates.";

    return (
        <div
            className="border-y p-2 divide-gray-100
        divide-y my-4"
        >
            <ItemValList label="Order overview" datas={overview} />
            <ItemValList label="Customer info" datas={customerInfo} />
            <ItemValList label="Price Summary" datas={priceInfo} />
            <ItemValList
                label="Delivery Info"
                datas={deliveryInfo}
                tagLine={deliveryTag}
            />
            <ItemValList
                label="Order Timeline"
                datas={timelineInfo}
                tagLine={deliveryTag}
            />
        </div>
    );
};
export default OrderOverview;
