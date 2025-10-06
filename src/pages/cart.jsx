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

const Cart = () => {
    const { cart, dispatch } = useCart();
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        setSubtotal(
            cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        );
    }, [cart, setSubtotal]);
    const tax = 100;
    const total = subtotal + tax;
    return (
        <>
            <NavBar />
            <div className="py-10 px-3 grid grid-cols-1 gap-2">
                {cart.map(data => (
                    <CartItem data={data} key={data.id} />
                ))}
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
                                    className="outline-none"
                                    maxLength={6}
                                    className="w-[80%] p-2 outline-none"
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
                            <FaCcAmazonPay className="text-amazonpay"/>
                            <FaCcMastercard className="text-mastercard" />
                        </div>
                        <p className="text-sm tracking-tighter mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nulla quae saepe qui eligendi optio beatae,
                            repudiandae vitae eum minima dolore ab aut adipisci
                            est itaque ipsum, consequatur recusandae iusto ipsam
                            laboriosam quo. Itaque quae, laboriosam placeat cum,
                            repellendus voluptatum corporis tenetur dolores
                            debitis id. Libero dicta quos dolorem expedita
                            neque.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Cart;

const CartItem = ({ data }) => {
    const { dispatch } = useCart();
    const [itemsNumb, setItemsNumb] = useState(data.quantity);
    const [roundPrice, setRoundPrice] = useState(0);

    const handleQtyChangeInp = element => {
        setItemsNumb(+element.target.value);
    };

    const handleQtyChangeBtn = type => {
        const increase = type === "increase";

        const cook = () => {
            if (itemsNumb <= 1) return;

            setItemsNumb(prev => (prev -= 1));
        };

        increase ? setItemsNumb(prev => (prev += 1)) : cook();
    };

    const removeCartItem = () => {
        dispatch({ type: "removeCartItem", payload: data.id });
    };

    useEffect(() => {
        setRoundPrice(prev => data.price * itemsNumb);
        dispatch({
            type: "updateQty",
            payload: { numb: itemsNumb, id: data.id }
        });
    }, [itemsNumb]);

    return (
        <>
            <div
                key={data.id}
                className="bg-gray-100  rounded-md flex
                    grid grid-cols-[1fr_3fr] gap-2 overflow-hidden"
            >
                <img src={data.image} className="h-full" />
                <div className="px-1 py-2">
                    <h1 className="font-bold">{data.name}</h1>
                    <p className="font-bold">{formatCurrency(data.price)}</p>
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
                                value={itemsNumb}
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
                        <p>Sub: {formatCurrency(roundPrice)} </p>
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
