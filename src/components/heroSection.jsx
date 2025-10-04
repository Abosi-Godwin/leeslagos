import { useState } from "react";

import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroImage from "../components/swiper";

import { heroSlides } from "../assets/mockDatas";

const HeroSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <Swiper
            className="h-[100%]"
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={true}
            onSlideChange={swiper => {
                const { snapIndex } = swiper;
                setSlideIndex(snapIndex);
            }}
        >
            {heroSlides.map(data => {
                return (
                    <SwiperSlide
                        key={data.id}
                        className="flex items-center justify-center
                        "
                    >
                        <HeroImage data={data} index={slideIndex} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default HeroSection;
