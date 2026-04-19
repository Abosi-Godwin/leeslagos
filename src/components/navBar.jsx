import { useState, useEffect } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { FaBars, FaX, FaCartArrowDown, FaHeart } from "react-icons/fa6";

import Logo from "./logo";
import BreadCrumbs from "./breadCrumbs";
import { logOutApi } from "../auth/logOut";
import { useWishlist } from "../contexts/wishlist";
import { useCart } from "../contexts/cart";
import { useAuth } from "../contexts/auth";

const guestLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Track Order", path: "/trackOrder" },
    { name: "Help", path: "/help" }
];

const userLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "My Orders", path: "/orders" },
    { name: "My Account", path: "/account" },
    { name: "Track Order", path: "/trackOrder" },
    { name: "Help", path: "/help" }
];

const Badge = ({ count }) => (
    <span
        className="absolute -top-3 -right-1 text-xs font-bold bg-neutral-900
      text-white w-5 h-5 rounded-full flex items-center justify-center"
    >
        {count > 99 ? "99+" : count}
    </span>
);

const Navbar = () => {
    const [scrolledDown, setScrolledDown] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const { pathname } = useLocation();
    const paths = pathname.split("/").filter(Boolean);

    const { wishlist } = useWishlist();
    const { cart } = useCart();
    const { isAuthenticated } = useAuth();

    const totalWishes = wishlist.length;
    const totalCart = cart.length;

    const currentLinks = isAuthenticated ? userLinks : guestLinks;

    useEffect(() => {
        const handleScroll = () => setScrolledDown(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setOpenMenu(false);
    }, [pathname]);

    const handleLogOut = () => {
        logOutApi();
        setOpenMenu(false);
    };

    const navActiveClass = ({ isActive }) =>
        isActive
            ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-1"
            : "hover:text-neutral-900 transition-colors";

    const mobileActiveClass = ({ isActive }) =>
        isActive
            ? "text-neutral-900 font-bold block"
            : "text-neutral-600 block";

    const navBg =
        scrolledDown || openMenu ? "bg-neutral-50 shadow-sm" : "bg-transparent";

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
          px-4 py-3 text-heading transition-all duration-200 ${navBg}`}
            >
                <Logo location="header" />

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-8 items-center font-medium text-neutral-600">
                    {currentLinks.map(link => (
                        <li key={link.name}>
                            <NavLink to={link.path} className={navActiveClass}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-2 bg-primary-light text-primary-dark font-bold rounded-md
                hover:opacity-90 transition-opacity"
                        >
                            Log out
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-primary-dark text-white font-bold rounded-md
                hover:opacity-90 transition-opacity"
                        >
                            Login
                        </Link>
                    )}
                </ul>

                {/* Right: Icons + mobile toggle */}
                <div className="flex gap-5 items-center text-2xl text-neutral-900">
                    <Link
                        to="/wishlist"
                        aria-label={`Wishlist (${totalWishes} items)`}
                        className="hover:scale-110 transition-transform"
                    >
                        <span className="relative block">
                            <FaHeart />
                            {totalWishes > 0 && <Badge count={totalWishes} />}
                        </span>
                    </Link>

                    <Link
                        to="/cart"
                        aria-label={`Cart (${totalCart} items)`}
                        className="hover:scale-110 transition-transform"
                    >
                        <span className="relative block">
                            <FaCartArrowDown />
                            {totalCart > 0 && <Badge count={totalCart} />}
                        </span>
                    </Link>

                    <button
                        className="md:hidden p-1.5 ring-1 ring-neutral-900 rounded-md
              hover:bg-gray-100 transition"
                        onClick={() => setOpenMenu(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={openMenu}
                    >
                        {openMenu ? (
                            <FaX className="text-lg" />
                        ) : (
                            <FaBars className="text-lg" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed top-[60px] left-0 w-full bg-white shadow-lg z-40 md:hidden
          origin-top transition-all duration-300
          ${openMenu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
            >
                <ul className="flex flex-col py-4 px-6 gap-4">
                    {currentLinks.map(link => (
                        <li
                            key={link.name}
                            className="border-b border-gray-100 pb-2"
                        >
                            <NavLink
                                to={link.path}
                                onClick={() => setOpenMenu(false)}
                                className={mobileActiveClass}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogOut}
                            className="py-1 px-4 bg-gray-200 font-bold rounded-md w-fit
                hover:bg-gray-300 transition-colors"
                        >
                            Log out
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="py-1 px-5 bg-primary-dark text-white font-bold rounded-md w-fit
                hover:opacity-90 transition-opacity"
                        >
                            Login
                        </Link>
                    )}
                </ul>
            </div>

            {/* Breadcrumbs spacer */}
            {paths.length > 0 && (
                <div className="pt-[60px]">
                    <BreadCrumbs paths={paths} />
                </div>
            )}
        </>
    );
};

export default Navbar;
