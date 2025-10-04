import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { FaBars, FaCartArrowDown, FaHeart } from "react-icons/fa6";

import Logo from "./logo";
import BreadCrumbs from "./breadCrumbs";
import { useWishlist } from "../contexts/wishlist";
const Navbar = () => {
    const url = useLocation();
    const paths = url.pathname.split("/").filter(item => item);
    const { wishlist } = useWishlist();
    const totalWishes = wishlist.length;
    const [scrolledDown, setScrolledDown] = useState(false);

    useEffect(() => {
        const getScrolled = () => {
            const scrollPosition = window.scrollY;
            setScrolledDown(scrollPosition > 50);
        };

        window.addEventListener("scroll", getScrolled);

        return () => window.removeEventListener("scroll", getScrolled);
    }, []);
    return (
        <>
            <nav
                className={`flex justify-between p-4 items-center
                shadow-gray-100 h-[10%] text-heading top-0 left-0 z-50
                transition-all duration-200 fixed ${
                    scrolledDown ? "bg-neutral-50" : ""
                } w-screen md:h-24`}
            >
                <Logo location="header" />
                <div
                    className="flex gap-10 items-center text-2xl
                text-neutral-900"
                >
                    <Link to="/wishlist">
                        <p className="relative">
                            <span className="text-sm font-bold font-heading text-white absolute top-0 left-1.5">
                                {totalWishes}
                            </span>
                            <FaHeart />
                        </p>
                    </Link>
                    <FaCartArrowDown />
                    <FaBars />
                </div>
            </nav>
            {paths.length > 0 && <BreadCrumbs paths={paths} />}
        </>
    );
};

export default Navbar;
