import { createContext, useEffect, useContext, useReducer } from "react";
import { setItem, getItem } from "../utils/localStorage";

const reducerFunc = (state, action) => {
    switch (action.type) {
        case "addToCart":
            {
                return [...state, action.payload];
            }
            break;
        case "removeCartItem":
            {
                return [...state].filter(item => item.id !== action.payload);
            }
            break;
        case "updateQty":
            {
                const itemToUpdate = state.find(
                    item => item.id === action.payload.id
                );

                itemToUpdate.quantity = action.payload.numb;

                return [...state];
            }
            break;
        case "set":
            return action.payload;

        default:
            action.payload;
    }
};

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducerFunc, []);

    useEffect(() => {
        const savedCartItems = getItem("cart");

        if (savedCartItems?.length >= 1) {
            dispatch({ type: "set", payload: savedCartItems });
        }
    }, []);

    useEffect(() => {
        setItem("cart", cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, useCart };
