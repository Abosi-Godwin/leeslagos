import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import toast from "react-hot-toast";

import NavBar from "../components/navBar.jsx";
import Footer from "../sections/footer.jsx";

import { useWishlist } from "../contexts/wishlist";
import { formatCurrency } from "../utils/currencyFormater";
const Wishlist = () => {
    const { wishlist } = useWishlist();

    return (
        <>
            <NavBar />
            {wishlist.length >= 1 ? (
                <div
                    className="py-6 px-3 divide-y
                  divide-gray-500 flex flex-col   divide-opacity-20"
                >
                    {wishlist.map(item => (
                        <WishItem item={item} key={item.id} />
                    ))}
                </div>
            ) : (
                <div
                    className="bg-white px-3 flex items-center justify-center
                py-6"
                >
                    <p className="bg-gray-100 rounded-md p-3 text-center">
                        There's nothing on your wishlist.
                        <br />
                        start exploring
                    </p>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Wishlist;

const WishItem = ({ item }) => {
    const { wishlist, dispatch } = useWishlist();
    const removeWish = id => {
        
        dispatch({ type: "remove", payload: id });
        toast.success("Removed from wishlist");
    };
    return (
        <div className="grid grid-cols-[1fr_3fr] p-2 rounded-md overflow-hidden gap-4 items-center my-2 overflow-hidden">
            <img src={item.image} className="w-18 h-18 md:h-16 md:w-16" />
            <div>
                <h1 className="font-bold font-heading mb-1">{item.name}</h1>
                <p className="text-sm tracking-tight font-semibold">
                    {formatCurrency(item.price)}
                </p>
                <div
                    className="flex items-center justify-between gap-3 py-2
                md:justify-end"
                >
                    <button
                        className="flex items-center justify-center gap-2
                    text-md"
                        onClick={() => removeWish(item.id)}
                    >
                        <FaHeart className="text-primary-normal texft-2xl" />
                        Remove
                    </button>

                    <Link to={`/products/${item.id}`} className="font-bold">
                        More info
                    </Link>
                </div>
            </div>
        </div>
    );
};
