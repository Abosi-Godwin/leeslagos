const NotTrackingYet = ({ noOders }) => {
    return !noOders ? (
        <div className="bg-gray-100 p-5 my-8 mx-auto rounded-md text-center">
            <h1 className="text-xl font-bold py-4 capitalize">
                Start tracking your order
            </h1>
            <p className="font-bold">
                Enter your Order ID above to see your order status and delivery
                progress.
            </p>
            <p className="py-4 px-6 text-sm tracking-tight">
                Tracking usually becomes available shortly after payment.
            </p>
        </div>
    ) : (
        <div className="bg-gray-100 p-5 my-8 mx-auto rounded-md text-center">
            <h1 className="text-xl font-bold py-2 capitalize">
                You haven’t placed any orders yet.
            </h1>

            <p className="p-3 tracking-tight">
                Once you place an order, you’ll be able to track its status and
                delivery progress here.
            </p>
        </div>
    );
};

export default NotTrackingYet;
