import Product from "../components/product";
const Products = ({ products }) => {
    return (
        <>
            {products.map(data => (
                <Product data={data} key={data.id} />
            ))}
        </>
    );
};

export default Products;
 