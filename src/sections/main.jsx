import { main_products } from "../assets/mockDatas";

import Highlights from "../components/highlights";

import NewArrivals from "../components/newArrivals";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import Partners from "../components/partners";
import BestSellers from "../components/bestSellers";
import Trending from "../components/trending";

const Main = () => {
    return (
        <main className="pt-20 px-4 flex flex-col items-center justify-center">
            <Highlights />
            <NewArrivals />
            <Testimonials />
            <Trending />
            <Gallery />
            <BestSellers />
            <Partners />
        </main>
    );
};

export default Main;
