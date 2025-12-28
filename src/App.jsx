import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Home from "./pages/homepage";
import ProductsPage from "./pages/productsPage";
import ProductPage from "./pages/productPage";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import About from "./pages/about";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";
import TrackOrder from "./pages/trackOrder";
import OrderSummary from "./pages/orderSummary";
import Signup from "./pages/signup";
import Login from "./pages/login";

import { ProtectedPages } from "./auth/protectedPages";
import { AuthRedirect } from "./auth/authRedirect";

import { fetchProduct } from "./utils/fetchProduct";
import { WishListProvider } from "./contexts/wishlist";
import { CartProvider } from "./contexts/cart";
import { LoadingProvider } from "./contexts/loading";
import { AuthProvider } from "./contexts/auth";

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
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/checkout",
        element: (
            <ProtectedPages>
                <Checkout />,
            </ProtectedPages>
        )
    },
    {
        path: "/ordered",
        element: (
            <ProtectedPages>
                <OrderSummary />,
            </ProtectedPages>
        )
    },
    {
        path: "/trackOrder",
        element: (
            <ProtectedPages>
                <TrackOrder />,
            </ProtectedPages>
        )
    },
    {
        path: "/signup",
        element: (
            <AuthRedirect>
                <Signup />,
            </AuthRedirect>
        )
    },
    {
        path: "/login",
        element: (
            <AuthRedirect>
                <Login />,
            </AuthRedirect>
        )
    },
    {
        path: "products/:productId",
        element: <ProductPage />,
        loader: fetchProduct
    }
]);

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <CartProvider>
                    <WishListProvider>
                        <LoadingProvider>
                            <RouterProvider
                                router={router}
                                future={{
                                    v7_startTransition: true
                                }}
                            />
                        </LoadingProvider>
                    </WishListProvider>
                </CartProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
