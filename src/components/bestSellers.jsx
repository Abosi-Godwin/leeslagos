import { Link } from "react-router-dom";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { main_products as products } from "../assets/mockDatas";
import { formatCurrency } from "../utils/currencyFormater";

const BestSellers = () => {
    const splitProducts = items => {
        const firstSet = items.slice(0, 5);
        const secondSet = items.slice(5, 10);
        const thirdSet = items.slice(10, 15);

        return [firstSet, secondSet, thirdSet];
    };

    const splitted = splitProducts(products);
    const tagLines = ["Exclusive", "Elegant", "Luxury"];
    return (
        <div className="py-5 my-10 px-4 w-full bg-gray-100 rounded-md">
            <h1 className="font-heading text-2xl font-bold text-center py-6 mb-6">
                Best Sellers
            </h1>
            <Swiper
                modules={[Navigation, A11y]}
                loop={true}
                slidesPerView={1}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }}
            >
                <div className="flex gap-2 absolute top-0 right-0 z-30 bg-white">
                    <button
                        className="custom-prev  bg-primary-normal p-1.5 font-bold text-white
                    text-xl rounded-md outline-0 border-0 hover:bg-primary-dark"
                    >
                        <FaCircleChevronLeft />
                    </button>
                    <button className="custom-next bg-primary-normal p-1.5 font-bold text-white text-xl rounded-md outline-0 border-0 hover:bg-primary-dark">
                        <FaCircleChevronRight />
                    </button>
                </div>

                {splitted.map((data, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <h1 className="font-bold pb-4 text-xl">
                                {tagLines[index]}
                            </h1>

                            {data.map(item => (
                                <Link to={`/products/${item.id}`} key={item.id}>
                                    <div
                                        className="grid grid-cols-[1fr_3fr] p-2
                                        bg-white rounded-md overflow-hidden
                                    gap-4 items-center my-2"
                                    >
                                        <img
                                            src={item.image}
                                            className="w-16 h-16"
                                        />
                                        <div className="">
                                            <h1 className="font-semibold">
                                                {item.name}
                                            </h1>
                                            <div className="flex gap-5">
                                                <p className="text-sm tracking-tight">
                                                    {formatCurrency(item.price)}
                                                </p>
                                                <p
                                                    className="text-sm
                                            tracking-tight line-through "
                                                >
                                                    {formatCurrency(
                                                        (item.price / 90) * 100
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default BestSellers;
