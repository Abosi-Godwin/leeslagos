import Products from "../components/products";
import NavBar from "../components/navBar";
import Footer from "../sections/footer";
import { main_products } from "../assets/mockDatas";

const ProductsPage = () => {
    const productsNumb = 10;
    const totalProductsNumb = main_products.length;

    return (
        <>
            <NavBar />
            <p className="p-4">
                Showing {productsNumb} of {totalProductsNumb} products .
            </p>
            <div className="py-16 px-4">
                <Products products={main_products.slice(0, productsNumb)} />
            </div>
            <Footer />
        </>
    );
};

export default ProductsPage;
