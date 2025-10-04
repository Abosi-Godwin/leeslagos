import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import { FaHeart, FaHeartCirclePlus } from "react-icons/fa6";
import { formatCurrency } from "../utils/currencyFormater";

import { useWishlist } from "../contexts/wishlist";

const Product = ({ data }) => {
    const [inWishList, setInWishlist] = useState(false);
    const { dispatch, wishlist } = useWishlist();

    const handleSetFavorite = () => {
        if (inWishList) {
            dispatch({ type: "remove", payload: data.id });
            toast.success("Removed from wishlist");
        } else {
            dispatch({ type: "add", payload: data });
            toast.success("Added to wishlist");
        }
    };
    useEffect(() => {
        setInWishlist(wishlist.find(wish => wish.id === data.id));
    }, [wishlist]);
    return (
        <AnimatePresence>
            <motion.div
                 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                className="p-4 shadow-md shadow-gray-100 rounded-md"
            >
                <div className="flex items-end justify-end pb-3">
                    {inWishList ? (
                        <FaHeart
                            className="text-primary-normal text-2xl"
                            onClick={handleSetFavorite}
                        />
                    ) : (
                        <FaHeartCirclePlus
                            className="text-primary-light
                         text-2xl"
                            onClick={handleSetFavorite}
                        />
                    )}
                </div>
                <Link to={`/products/${data.id}`}>
                    <img src={data.image} />
                    <div className="py-2">
                        <div className="py-4">
                            <h1 className="uppercase text-sm font-thind font-light mb-2">
                                {data.category}
                            </h1>
                            <h1 className="font-bold font-heading mb-1">
                                {data.name}
                            </h1>
                            <p className="text-sm">{data.description}</p>
                        </div>
                        <h1 className="font-bold text-2xl text-primary-normal">
                            {formatCurrency(data.price)}
                        </h1>
                    </div>
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};

export default Product;
