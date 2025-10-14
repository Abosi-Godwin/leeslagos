import { main_products } from "../assets/mockDatas";
import Product from "../components/product";

const newArrivals = main_products.filter(
    data => data.category.toLowerCase() === "wine"
);
import Products from "../components/products";

const NewArrivals = () => {
    return (
        <div className="py-12">
            <h1 className="text-2xl font-bold font-heading text-center">
                Shop new arrivals
            </h1>
            <div className="py-6 px-3 grid grid-cols-1 gap-6 md:grid-cols-4">
                <Products products={main_products} />
            </div>
        </div>
    );
};

export default NewArrivals;
