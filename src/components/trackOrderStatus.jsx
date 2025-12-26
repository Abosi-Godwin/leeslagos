import OrderedItems from "../components/orderedItems";

const TrackOrderStatus = ({ items }) => {
    return (
        <div className="py-4">
            <h1 className="text-xl font-bold mb-1">Ordered Items</h1>
            <OrderedItems items={items} />
            <p className="text-sm tracking-tight">
                All orders are carefully inspected before delivery.
            </p>
        </div>
    );
};
export default TrackOrderStatus;
