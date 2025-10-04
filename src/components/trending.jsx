import { main_products } from "../assets/mockDatas";
import Product from "./product";
const Trending = () => {
    return (
        <div className="py-6">
            <div className="text-center px-2">
                <h1 className="font-heading text-2xl font-bold text-center my-2">
                    Trending Now
                </h1>
                <p className="text-center">
                    The most wanted pieces of the season — curated by style,
                    loved by all.
                </p>
                <p className="py-4 tracking-tight text-sm">
                    From bold sunglasses to timeless watches and signature
                    scents, these are the Lee’s Lagos essentials everyone is
                    reaching for right now.
                </p>
            </div>
            <div className="grid py-6 px-3 gap-6 grid-cols-1 md:grid-cols-3">
                {main_products.slice(9, 15).map(data => (
                    <Product data={data} key={data.id} />
                ))}
            </div>
        </div>
    );
};

export default Trending;
