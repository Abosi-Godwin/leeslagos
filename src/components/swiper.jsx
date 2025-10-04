import { motion, AnimatePresence } from "motion/react";
import CtaButton from "../components/ctaButton";
const HeroImage = ({ data, index }) => {
    return (
        <div
            className="h-full bg-cover bg-center flex items-center justify-center bg-white  bg-blend-darken"
            style={{
                backgroundImage: `url('${data.image}')`
            }}
        >
            <AnimatePresence>
                <motion.div
                    key={index}
                    custom={index}
                    initial={i => {
                        switch (i) {
                            case 0:
                                return { opacity: 0, y: 250, x: 0 };
                            case 1:
                                return { opacity: 0, y: 0, x: -50 };
                            case 2:
                                return { opacity: 0, y: 0, x: 0 };
                            case 3:
                                return { opacity: 0, y: -100, x: 50 };
                            default:
                                return { opacity: 0, y: 0, x: 0 };
                        }
                    }}
                    whileInView={i => {
                        switch (i) {
                            case 0:
                                return { opacity: 1, y: 150, x: 0 };
                            case 1:
                                return { opacity: 1, y: 0, x: 0 };
                            case 2:
                                return { opacity: 1, y: 80, x: 0 };
                            case 3:
                                return { opacity: 1, y: -100, x: 0 };
                            default:
                                return { opacity: 1, y: 0, x: 0 };
                        }
                    }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                    className="bg-white w-4/5 p-3 flex backdrop-blur-md flex-col
                    gap-4 rounded-md md:w-2/5"
                >
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-bold font-heading">
                            {data.title}
                        </h2>
                        <p>{data.subtitle}</p>
                    </div>
                    <CtaButton text={data.cta} type="cta" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
export default HeroImage;
 