import { useReducer, useContext, useEffect, createContext } from "react";
import { setItem, getItem } from "../utils/localStorage";

const reducerFunc = (state, action) => {
    switch (action.type) {
        case "add":
            {
                return [...state, action.payload];
            }
            break;
        case "remove":
            {
                const removed = state.filter(
                    data => data.id !== action.payload
                );
                return [...removed];
            }
            break;
        case "set":
            {
                return action.payload;
            }
            break;
        default:
            console.log("Nothing");
    }
};
const WishlistContext = createContext([]);

const useWishlist = () => useContext(WishlistContext);

const WishListProvider = ({ children }) => {
    const [wishlist, dispatch] = useReducer(reducerFunc, []);

    useEffect(() => {
        const savedWishlist = getItem("wishlist");

        if (savedWishlist?.length >= 1) {
            dispatch({ type: "set", payload: savedWishlist });
        }
    }, []);

    useEffect(() => {
        setItem("wishlist", wishlist);
    }, [wishlist]);

  
    return (
        <WishlistContext.Provider value={{ wishlist, dispatch }}>
            {children}
        </WishlistContext.Provider>
    );
};

export { WishListProvider, useWishlist };
