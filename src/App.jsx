import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/homepage";
import ProductsPage from "./pages/productsPage";
import ProductPage from "./pages/productPage";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
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
import { AuthProvider } from "./contexts/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: (
      <ProtectedPages>
        <Checkout />,
      </ProtectedPages>
    ),
  },
  {
    path: "/ordered",
    element: (
      <ProtectedPages>
        <OrderSummary />,
      </ProtectedPages>
    ),
  },
  {
    path: "/trackOrder",
    element: (
      <ProtectedPages>
        <TrackOrder />,
      </ProtectedPages>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthRedirect>
        <Signup />,
      </AuthRedirect>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthRedirect>
        <Login />,
      </AuthRedirect>
    ),
  },
  {
    path: "products/:productId",
    element: <ProductPage />,
    loader: fetchProduct,
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishListProvider>
          <RouterProvider
            router={router}
            future={{
              v7_startTransition: true,
            }}
          />
        </WishListProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
