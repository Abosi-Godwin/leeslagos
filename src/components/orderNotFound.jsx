import { FaSearch } from "react-icons/fa";

const OrderNotFound = () => {
    return (
        <div className="p-5 rounded-md bg-gray-50">
            <FaSearch
                className="text-2xl bg-primary-light size-10 p-2
            m-auto rounded-md text-primary-dark"
            />
            <h1 className="text-xl py-3 font-bold text-center">
                We couldn’t find that order
            </h1>
            <p className="text-center py-1.5 pt-2 pb-5">
                This order doesn’t seem to exist or hasn’t been processed yet.
                Please check your details and try again.
            </p>
            <p className="text-sm text-center">
                Still having trouble? Our support team is happy to help.
            </p>
        </div>
    );
};

export default OrderNotFound;
