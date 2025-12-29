import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

import { formatCurrency } from "../utils/currencyFormater";
import Navbar from "../components/navBar";
import Instock from "../components/inStock";
import Footer from "../sections/footer";
import Product from "../components/product";
import CtaButton from "../components/ctaButton";

import { useCart } from "../contexts/cart";

const ProductPage = () => {
    const { product, similarItems } = useLoaderData();

    const { dispatch, cart } = useCart();

    const [isInCart, setIsInCart] = useState(false);

    const navigate = useNavigate();

    const handleAddToCart = data => {
        if (isInCart) {
            dispatch({ type: "removeCartItem", payload: data.id });
            toast.success("Removed from cart");
        } else {
            dispatch({ type: "addToCart", payload: { ...data, quantity: 1 } });
            toast.success("Added to cart");
        }
    };
    const handleCheckout = data => {
        if (isInCart) {
            navigate("/checkout");
            return;
        }

        dispatch({ type: "addToCart", payload: { ...data, quantity: 1 } });
        navigate("/checkout");
    };

    useEffect(() => {
        setIsInCart(Boolean(cart.find(item => item?.id === product.id)));
    }, [cart, product.id]);

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
                            disable={!product.inStock}
                            data={product}
                            text={isInCart ? "Added to cart" : "Add to cart"}
                            handler={handleAddToCart}
                        />
                        <CtaButton
                            disable={!product.inStock}
                            data={product}
                            text="Buy Now"
                            type="cta"
                            handler={handleCheckout}
                        />
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
