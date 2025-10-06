import NavBar from "../components/navBar";
import Footer from "../sections/footer";
import { useCart } from "../contexts/cart";
const Cart = () => {
    const { cart, dispatch } = useCart();
    console.log(cart);

    return (
        <>
            <NavBar />
            <div className="py-10 px-3">
                {cart.map(data => (
                    <div key={data.id} className="bg-gray-100">{data.price}</div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
