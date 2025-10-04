import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa6";

import { loader } from "../utils/imgLoaders";
import { reviews } from "../assets/mockDatas";

import StarRating from "./stars";

const Testimonials = () => {
    const [userImgs, setUserImgs] = useState([]);

    useEffect(() => {
        const getImgs = async () => {
            const pictures = await loader();
            setUserImgs(pictures);
        };
        getImgs();
    }, []);

    return (
        <section
            className="flex flex-col items-center justify-center rounded-md
        text-center py-6 gap-5  bg-gray-100"
        >
            <div className="px-2">
                <h1 className="text-2xl font-bold font-heading">
                    Happy Customers
                </h1>
                <p>See how our products have made our customers feel.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 py-6 px-3 md:grid-cols-3">
                {reviews.map((data, index) => (
                    <Review
                        data={data}
                        key={index}
                        userImgs={userImgs}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

const Review = ({ data, index, userImgs }) => {
    return (
        <div
            key={data.id}
            className="p-3 rounded-md shadow-md
                    shadow-gray-200 bg-white"
        >
            <div className="flex justify-end">
                <FaQuoteRight
                    className="bg-primary-normal text-white w-8 h-8
                rounded-full text-2xl p-1"
                />
            </div>
            <div className="flex flex-col gap-2 py-3">
                <p>{data.review}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white">
                    <img
                        src={userImgs[index]}
                        alt={index}
                        className="w-full h-full rounded-full
                                    border-2 border-primary-light p-1"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <div
                        className="flex flex-row justify-between
                                gap-5 items-center w-full"
                    >
                        <p className="text-light-text font-bold">
                            <strong>{data.name}</strong>
                        </p>

                        <StarRating rate={data.rating} />
                    </div>
                    <p className="text-left">{data.product}</p>
                </div>
            </div>
        </div>
    );
};
