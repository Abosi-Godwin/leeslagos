import {
    FaHouseChimney,
    FaEnvelope,
    FaPhone,
    FaSnapchat,
    FaFacebookF,
    FaInstagram,
    FaTiktok
} from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import Logo from "../components/logo";
import ScrollToTop from "../components/scrollToTop";

const Footer = () => {
    return (
        <footer
            className="py-12 md:px-6 bg-gray-100 flex flex-col items-center
        justify-center text-neutral-900"
        >
            <div className="flex flex-col justify-between md:gap-8 p-4 md:w-4/5">
                <div
                    className="flex flex-col gap-4 md:flex-row md:gap-16
                bg-amcber-600"
                >
                    <div className="md:w-2/5">
                        <Logo />
                        <p className="text-sm pt-4">
                            At LeesLagos, we curate jewelry, watches, and
                            perfumes that blend classic sophistication with
                            contemporary style. Each piece is designed to
                            inspire confidence, celebrate individuality, and
                            elevate every moment.
                        </p>
                    </div>
                    <div className="pt-10 md:pt-0">
                        <h1 className="text-xl font-semibold">Contact Us</h1>
                        <ul className="py-4 flex flex-col gap-4 text-sm">
                            <li className="flex items-center gap-2">
                                <FaHouseChimney className="text-xl" /> Lolite
                                plaza amadasun street Lekki Lagos, Nigeria.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-xl" />
                                leeslagos@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone className="text-xl" /> +2349160003594
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-10 md:flex-row">
                    <div className="pt-6 md:pt-0">
                        <h1 className="text-xl font-semibold">Information </h1>
                        <ul className="grid grid-cols-2 gap-4 py-4">
                            <li>About Us</li>
                            <li>Terms and conditions</li>
                            <li>Contact us</li>
                            <li>Delivery information</li>
                            <li>Privacy policy</li>
                            <li>Site map</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Information </h1>
                        <div className="flex gap-5 w-fit py-4">
                            <FaSnapchat
                                className="bg-primary-normal w-8 h-8
                                rounded-full
                            text-2xl p-1.5 font-bold text-white"
                            />
                            <FaFacebookF
                                className="bg-primary-normal w-8 h-8
                                rounded-full
                            text-2xl p-1.5 font-bold text-white"
                            />
                            <FaInstagram
                                className="bg-primary-normal w-8 h-8
                                rounded-full
                            text-2xl p-1.5 font-bold text-white"
                            />
                            <FaTiktok
                                className="bg-primary-normal w-8 h-8
                                rounded-full
                            text-2xl p-1.5 font-bold text-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col py-4 gap-4 items-center md:flex-row md:gap-8 md:py-8">
                    <div className="py-4">
                        <h1 className="font-semibold">Signup for newsletter</h1>
                        <div className="border-b-2 p-2 flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address..."
                                className="bg-inherit outline-none border-none"
                            />
                            <button className="font-bold">Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/payment.png" />
                    </div>
                </div>
            </div>
            <p className="pt-4 text-sm text-center">
                © 2025 Leeslagos Made with ❤️ by Godwin
            </p>
            <ScrollToTop />
              <Toaster position="bottom-right" />
        </footer>
    );
};

export default Footer;
