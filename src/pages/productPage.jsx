import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { formatCurrency } from "../utils/currencyFormater";
import Navbar from "../components/navBar";
import Footer from "../sections/footer";
import Product from "../components/product";
import CtaButton from "../components/ctaButton";

import { useCart } from "../contexts/cart";

const ProductPage = () => {
    const { product, similarItems } = useLoaderData();
    const { dispatch, cart } = useCart();
    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = data => {
        if (isInCart) {
            dispatch({ type: "removeCartItem", payload: data.id });
            toast.success("Removed from cart");
        } else {
            dispatch({ type: "addToCart", payload: { ...data, quantity: 1 } });
            toast.success("Added to cart");
        }
    };
    useEffect(() => {
        setIsInCart(cart.find(item => item?.id === product.id));
    }, [cart]);

    return (
        <>
            <Navbar />
            <div className="py-16 px-5">
                <div className="relative">
                    <p className="absolute top-2 right-0 p-1 bg-white">
                        {product.tag}
                    </p>
                    <img src={product.image} />
                </div>
                <div className="flex flex-col gap-3  pt-3">
                    <div className="flex justify-between items-center">
                        <p>{product.category}</p>
                        <Instock inStock={product.inStock} />
                    </div>
                    <h1 className="text-2xl font-bold font-heading">
                        {product.name}
                    </h1>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl py-5 text-primary-normal font-bold">
                        {formatCurrency(product.price)}
                    </h1>
                    <div className="flex items-center gap-4 py-6">
                        <CtaButton
                            data={product}
                            text={isInCart ? "Added to cart" : "Add to cart"}
                            handler={handleAddToCart}
                        />
                        <CtaButton text="Buy Now" type="cta" />
                    </div>
                </div>
                <div className="py-6">
                    <div className="flex gap-1.5">
                        <p className="font-bold capitalize text-neutral-700">
                            color:
                        </p>
                        <select
                            className="outline-none rounded-md
                        bg-transparent"
                        >
                            <option value="select">select</option>
                            <option value={product.details.color}>
                                {product.details.color}
                            </option>
                        </select>
                    </div>
                    <div className="flex gap-1.5">
                        <p className="font-bold capitalize text-neutral-700">
                            Size:
                        </p>
                        <button>{product.details.size}</button>
                    </div>
                </div>
                {similarItems.length >= 1 && (
                    <div className="py-4">
                        <h1 className="font-bold">Similar products</h1>
                        <div className="grid grid-cols-2 items-stretch">
                            {similarItems.map(data => (
                                <Product key={data.id} data={data} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;

const Instock = ({ inStock }) => {
    return inStock ? (
        <p className="flex items-center gap-2">
            <FaCircleCheck className="text-green-500" />
            In stock
        </p>
    ) : (
        <p className="flex items-center gap-2">
            <FaCircleCheck className="text-green-500" />
            Out of stock
        </p>
    );
};
