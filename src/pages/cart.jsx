import { useState, useEffect } from "react";
import {
    FaTrash,
    FaCcVisa,
    FaCcPaypal,
    FaCcStripe,
    FaCcAmazonPay,
    FaCcMastercard
} from "react-icons/fa6";

import NavBar from "../components/navBar";
import Footer from "../sections/footer";

import CtaButton from "../components/ctaButton";

import { useCart } from "../contexts/cart";
import { formatCurrency } from "../utils/currencyFormater";
import { trustHighlights } from "../assets/mockDatas";
const Cart = () => {
    const { cart, dispatch } = useCart();
    const [subtotal, setSubtotal] = useState(0);

    const emptyCart = cart?.length === 0;
    const tax = 100;
    const total = subtotal + tax;

    useEffect(() => {
        setSubtotal(
            cart.reduce((acc, curr) => acc + curr?.price * curr?.quantity, 0)
        );
    }, [cart, setSubtotal]);

    return (
        <>
            <NavBar />
            <div className="py-10 px-3 grid grid-cols-1 gap-2">
                {emptyCart ? (
                    <EmptyCart />
                ) : (
                    cart?.map(data => <CartItem data={data} key={data?.id} />)
                )}

                <div className="py-8 px-4 bg-gray-100 font-bold">
                    <h1 className="text-2xl">Summary </h1>
                    <div className="py-4 px-2 text-sm">
                        <p>Subtotal: {formatCurrency(subtotal)}</p>
                        <p>Shipping estimate: Free shipping</p>
                        <p>Tax: {formatCurrency(tax)}</p>
                        <div className="flex  justify-between items-center py-3">
                            <p>Discount code:</p>
                            <div
                                className="flex justify-between items-center
                             bg-white rounded-md overflow-hidden"
                            >
                                <input
                                    type="text"
                                    placeholder="Ente code.."
                                    maxLength={6}
                                    className="w-[80%] p-2 outline-none outline-none"
                                />
                                <button
                                    className="bg-grcay-100 p-1 rounded-md
                                    capitalize
                                outline-none"
                                >
                                    claim
                                </button>
                            </div>
                        </div>
                        <p className="text-xl font-bold py-4">
                            Total: {formatCurrency(total)}
                        </p>
                        <CtaButton type="cta" text="Secure checkout" />
                        <div
                            className="flex justify-between items-center p-2
                        rounded-md bg-white my-4 text-2xl"
                        >
                            <FaCcVisa className="text-visa" />
                            <FaCcPaypal className="text-paypal" />
                            <FaCcStripe className="text-stripe" />
                            <FaCcAmazonPay className="text-amazonpay" />
                            <FaCcMastercard className="text-mastercard" />
                        </div>
                        <section className="py-12 bg-gray-50 rounded-md">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                                    {trustHighlights.map(
                                        ({ id, icon: Icon, title, text }) => (
                                            <div
                                                key={id}
                                                className="flex flex-col items-center"
                                            >
                                                <div className="w-14 h-14 flex
                                                items-center justify-center
                                                rounded-full bg-primary-light
                                                text-white mb-4 shadow-md">
                                                    <Icon size={24} />
                                                </div>
                                                <h3 className="text-lg font-semibold mb-2">
                                                    {title}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {text}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Cart;
const EmptyCart = () => {
    return (
        <div className="bg-gray-50 p-2 rounded-md text-center">
            <p>Nothing in your cart.</p>
        </div>
    );
};
const CartItem = ({ data }) => {
    const { dispatch } = useCart();

    const [quantity, setQuantity] = useState(data?.quantity);

    const [subTotalPrice, setSubTotalPrice] = useState(0);

    const handleQtyChangeInp = element => {
        setQuantity(+element.target.value);
    };

    const handleQtyChangeBtn = type => {
        const increase = type === "increase";

        const cook = () => {
            if (quantity <= 1) return;
            setQuantity(prev => (prev -= 1));
        };

        increase ? setQuantity(prev => (prev += 1)) : cook();
    };

    const removeCartItem = () => {
        dispatch({ type: "removeCartItem", payload: data?.id });
    };

    useEffect(() => {
        setSubTotalPrice(prev => data?.price * quantity);

        dispatch({
            type: "updateQty",
            payload: { numb: quantity, id: data?.id }
        });
    }, [quantity]);

    return (
        <>
            <div
                key={data?.id}
                className="bg-gray-100  rounded-md flex
                    grid grid-cols-[1fr_3fr] gap-2 overflow-hidden"
            >
                <img src={data?.image} className="h-full" />
                <div className="px-1 py-2">
                    <h1 className="font-bold">{data?.name}</h1>
                    <p className="font-bold">{formatCurrency(data?.price)}</p>
                    <div
                        className="flex justify-between items-center px-0.5
                    py-1"
                    >
                        <div className="flex gap-2">
                            <button
                                className="px-1"
                                onClick={() => handleQtyChangeBtn("increase")}
                            >
                                +
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQtyChangeInp}
                                className="w-6 outline-none rounded-md text-center"
                            />
                            <button
                                className="px-1"
                                onClick={() => handleQtyChangeBtn("decrease")}
                            >
                                -
                            </button>
                        </div>
                        <p>Sub: {formatCurrency(subTotalPrice)} </p>
                        <FaTrash
                            className="text-red-500"
                            onClick={removeCartItem}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

/*
   <div className="flex gap-2">
                            <button
                                className="px-1"
                                onClick={() => handleQtyChangeBtn("increase")}
                            >
                                +
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQtyChangeInp}
                                className="w-6 outline-none rounded-md text-center"
                            />
                            <button
                                className="px-1"
                                onClick={() => handleQtyChangeBtn("decrease")}
                            >
                                -
                            </button>
                        </div>
                        


*/
