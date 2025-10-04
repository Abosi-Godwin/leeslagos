import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Grid } from "swiper/modules";

import { partnersSlides } from "../assets/mockDatas";
const Partners = () => {
    return (
        <div className="py-10">
            <div className="py-5 text-center">
                <h1 className="font-heading font-bold text-2xl capitalize mb-2">
                    partners in success
                </h1>
                <p>Highlighting the industry leaders we have partnered with.</p>
            </div>
            <div className="w-screen max-w-screen-md p-2 md:w-fit">
                <Swiper
                    modules={[A11y, Grid]}
                    slidesPerView={1}
                    className="flex items-center justify-center"
                >
                    {partnersSlides.map((data, ind) => (
                        <SwiperSlide
                            key={ind}
                            className=""
                        >
                            <img
                                src={data}
                                alt={data}
                                className="max-h-40 max-w-40 object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;
