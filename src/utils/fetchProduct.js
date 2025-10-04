import { main_products } from "../assets/mockDatas";
export const fetchProduct = ({ params }) => {
    const product = main_products.find(
        product => product.id === Number(params.productId)
    );
    const similarItems = main_products
        .filter(
            item => item.id !== product.id && item.category === product.category
        )
        .slice(0, 4);
    
    return { product, similarItems };
};
