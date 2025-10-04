import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Grid ,Navigation} from "swiper/modules";

import { gallerySlides } from "../assets/mockDatas";
const Gallery = () => {
    return (
        <div className="flex flex-col md:flex-row overflow-hidden">
            <div className="pt-10">
                <div className="text-center py-6 px-3">
                    <h1 className="text-2xl font-bold font-heading">
                        Authenticity in Every Detail
                    </h1>
                    <p>Real style. Real quality. Real confidence. </p>
                </div>
                <div className="h-dvh w-screen relative md:w-4/5">
                    <video
                        width="100%"
                        height="100%"
                        muted={true}
                        loop={true}
                        autoPlay
                        className="absolute top-0 left-0 object-cover -z-10 h-full"
                    >
                        <source src="/1750285145.mp4" type="video/mp4" />
                        <source src="/1750285145.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div
                        className="bg-black/50 h-full flex justify-center
                items-end pb-3"
                    >
                        <div
                            className="bg-white/80 p-4 rounded-md h-fit w-3/5
                    text-center"
                        >
                            <h1 className="text-2xl mb-2 font-bold font-heading">
                                We're Legit
                            </h1>
                            <p>
                                “At Lee’s Lagos, authenticity is our signature —
                                every piece is genuine, crafted to last, and
                                made to be remembered.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-screen max-w-screen-md p-2 md:w-fit">
                <Swiper
                    modules={[A11y, Grid, Navigation]}
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            grid: {
                                rows: 1
                            }
                        },

                        980: {
                            slidesPerView: 1,
                            grid: {
                                rows: 2,
                                fill: "row"
                            }
                        }
                    }}
                    className="flex md:flex-col"
                >
                    {gallerySlides.map((data, ind) => {
                        return (
                            <SwiperSlide key={ind}>
                                <img
                                    src={data}
                                    className="rounded-md md:w-24"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;
