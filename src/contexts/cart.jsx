import { createContext, useEffect, useContext, useReducer, useState } from "react";
import { setItem, getItem } from "../utils/localStorage";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "addToCart":
      {
        return { cart: [...state.cart, action.payload], subTotal: state.subTotal };
      }
      break;
    case "removeCartItem":
      {
        return {
          cart: [...state.cart].filter((item) => item.id !== action.payload),
          subTotal: state.subTotal,
        };
      }
      break;
    case "updateQty":
      {
        const itemToUpdate = state.cart.find((item) => item.id === action.payload.id);

        itemToUpdate.quantity = action.payload.numb;

        return { cart: [...state.cart], subTotal: state.subTotal };
      }
      break;
    case "updateTotalPrice":
      {
        const data = [...state.cart].reduce((acc, curr) => acc + curr?.price * curr?.quantity, 0);

        return { cart: state.cart, subTotal: data };
      }
      break;
    case "clear":
      return { cart: [], subTotal: 0 };
    case "set":
      return { cart: [...action.payload], subTotal: 0 };

    default:
      return { cart: [...state.cart], subTotal: state.subTotal };
  }
};

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    subTotal: 0,
  };
  const [{ cart, subTotal }, dispatch] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    const savedCartItems = getItem("cart");
    if (savedCartItems?.length >= 1) {
      dispatch({ type: "set", payload: savedCartItems });
    }
  }, []);

  useEffect(() => {
    setItem("cart", cart);
    dispatch({ type: "updateTotalPrice" });
  }, [cart]);
   
  return (
    <CartContext.Provider value={{ cart, subTotal, dispatch }}>{children}</CartContext.Provider>
  );
};

export { CartProvider, useCart };
