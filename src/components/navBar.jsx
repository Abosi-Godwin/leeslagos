import { useState, useEffect } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { FaBars, FaX, FaCartArrowDown, FaHeart } from "react-icons/fa6";

import Logo from "./logo";
import BreadCrumbs from "./breadCrumbs";

import { logOutApi } from "../auth/logOut";

import { useWishlist } from "../contexts/wishlist";
import { useCart } from "../contexts/cart";
import { useAuth } from "../contexts/auth";

const Navbar = () => {
    const [scrolledDown, setScrolledDown] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const url = useLocation();
    const paths = url.pathname.split("/").filter(item => item);
    const { wishlist } = useWishlist();
    const { cart } = useCart();
    const { isAuthenticated, user } = useAuth();
    const totalWishes = wishlist.length;
    const totalCart = cart.length;

    useEffect(() => {
        const getScrolled = () => {
            const scrollPosition = window.scrollY;
            setScrolledDown(scrollPosition > 50);
        };

        window.addEventListener("scroll", getScrolled);

        return () => window.removeEventListener("scroll", getScrolled);
    }, []);

    const handleMenu = () => {
        setOpenMenu(option => !option);
    };

    // 1. Define your links here so you can map over them
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Track order", path: "/trackOrder" },
        { name: "Help", path: "/help" }
    ];

    // 2. Define your links here so you can map over them
    const userNavLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "My Orders", path: "/contact" },
        { name: "My Account", path: "/contact" },
        { name: "Track Order", path: "/trackOrder" },
        { name: "Help", path: "/help" }
    ];
    const handleLogOut = () => {
        logOutApi();
        setOpenMenu(false);
    };
    return (
        <>
            <nav
                className={`flex justify-between p-4 items-center
                shadow-gray-100 text-heading top-0 left-0 z-50
                transition-all duration-200 fixed ${
                    scrolledDown || openMenu
                        ? "bg-neutral-50"
                        : "bg-transparent"
                }   w-screen md:h-[2vh]`}
            >
                <Logo location="header" />

                <ul className="hidden md:flex gap-8 items-center font-medium text-neutral-600">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-1"
                                        : "hover:text-neutral-900 transition-colors"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                    <button
                        className="p-3 bg-primary-light
                    text-primary-dark font-bold rounded-md"
                    >
                        Log out
                    </button>
                </ul>

                {/* --- Right: Icons & Mobile Toggle --- */}
                <div className="flex gap-6 items-center text-2xl text-neutral-900">
                    <Link
                        to="/wishlist"
                        className="hover:scale-110 transition-transform"
                    >
                        <p className="relative">
                            <span
                                className="text-xs flex items-center
                            justify-center font-bold bg-neutral-900 w-5 h-5
                            rounded-full text-white absolute -top-4 right-0"
                            >
                                {totalWishes}
                            </span>
                            <FaHeart />
                        </p>
                    </Link>

                    <Link
                        to="/cart"
                        className="hover:scale-110 transition-transform"
                    >
                        <p className="relative">
                            <span
                                className="text-xs flex items-center
                            justify-center font-bold bg-neutral-900 w-5 h-5
                            rounded-full text-white absolute -top-4 right-0"
                            >
                                {totalCart}
                            </span>
                            <FaCartArrowDown />
                        </p>
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden p-1.5 ring-1 ring-neutral-900 rounded-md hover:bg-gray-100 transition"
                        onClick={handleMenu}
                        aria-label="Toggle Menu"
                    >
                        {openMenu ? (
                            <FaX className="text-lg" />
                        ) : (
                            <FaBars className="text-lg" />
                        )}
                    </button>
                </div>
            </nav>
            <div
                className={`fixed top-[80px] left-0 w-full bg-white shadow-lg z-40 transform transition-transform duration-300 md:hidden origin-top
               ${
                   openMenu
                       ? "scale-y-100 opacity-100"
                       : "scale-y-0 opacity-0 h-0"
               } `}
            >
                {/*Mobile menu list*/}
                <ul className="flex flex-col py-4 px-6 gap-4">
                    {isAuthenticated
                        ? userNavLinks.map(link => (
                              <li
                                  key={link.name}
                                  className="border-b border-gray-100 pb-2"
                              >
                                  <NavLink
                                      to={link.path}
                                      onClick={() => setOpenMenu(false)}
                                      className={({ isActive }) =>
                                          isActive
                                              ? "text-neutral-900 font-bold block"
                                              : "text-neutral-600 block"
                                      }
                                  >
                                      {link.name}
                                  </NavLink>
                              </li>
                          ))
                        : navLinks.map(link => (
                              <li
                                  key={link.name}
                                  className="border-b border-gray-100 pb-2"
                              >
                                  <NavLink
                                      to={link.path}
                                      onClick={() => setOpenMenu(false)}
                                      className={({ isActive }) =>
                                          isActive
                                              ? "text-neutral-900 font-bold block"
                                              : "text-neutral-600 block"
                                      }
                                  >
                                      {link.name}
                                  </NavLink>
                              </li>
                          ))}
                    {isAuthenticated ? (
                        <button
                            className="py-0.5 px-3 bg-gray-200
                     font-bold rounded-md w-fit"
                            onClick={handleLogOut}
                        >
                            Log out
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="py-1 px-5 bg-primary-dark
                    text-white font-bold rounded-md w-fit"
                        >
                            Login
                        </Link>
                    )}
                </ul>
            </div>

            <div className={`${paths.length > 0 ? "pt-[80px]" : "pt-0"}`}>
                {paths.length > 0 && <BreadCrumbs paths={paths} />}
            </div>
        </>
    );
};

export default Navbar;
