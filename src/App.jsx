import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/homepage";
import ProductsPage from "./pages/productsPage";
import ProductPage from "./pages/productPage";
import Wishlist from "./pages/wishlist";

import { fetchProduct } from "./utils/fetchProduct";
import { WishListProvider } from "./contexts/wishlist";

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
        element: <Wishlist />,
    },
    {
        path: "products/:productId",
        element: <ProductPage />,
        loader: fetchProduct
    }
]);

function App() {
    return (
        <WishListProvider>
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true
                }}
            />
        </WishListProvider>
    );
}

export default App;
