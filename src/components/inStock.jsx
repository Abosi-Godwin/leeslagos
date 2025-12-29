import { FaCircleCheck } from "react-icons/fa6";

const Instock = ({ inStock }) => {
    return (
        <p className="flex items-center gap-2">
            {inStock ? <In /> : "Out of stock"}
        </p>
    );
};
export default Instock;

const In = () => {
    return (
        <>
            <FaCircleCheck className="text-green-500" /> In stock
        </>
    );
};
