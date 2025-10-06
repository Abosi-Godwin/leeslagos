import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/homepage";
import ProductsPage from "./pages/productsPage";
import ProductPage from "./pages/productPage";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";

import { fetchProduct } from "./utils/fetchProduct";
import { WishListProvider } from "./contexts/wishlist";
import { CartProvider } from "./contexts/cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <ProductsPage />
    },
    {
        path: "/wishlist",
        element: <Wishlist />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "products/:productId",
        element: <ProductPage />,
        loader: fetchProduct
    }
]);

function App() {
    return (
        <CartProvider>
            <WishListProvider>
                <RouterProvider
                    router={router}
                    future={{
                        v7_startTransition: true
                    }}
                />
            </WishListProvider>
        </CartProvider>
    );
}

export default App;
