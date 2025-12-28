import Heading from "../components/heading";

import NavBar from "../components/navBar";
import Footer from "../sections/footer";

const About = () => {
    return (
        <>
            <NavBar />
            <div className="px-5 py-10">
                <Heading text="About LeesLagos." />
                <div className="pt-10">
                    <h2 className="font-semibold underline">Who we are</h2>
                    <p className="py-5">
                        LeesLagos is a Lagos-born fashion brand built on
                        intention, confidence, and culture. We design
                        contemporary pieces that feel effortless to wear yet
                        powerful to own — clothing made for people who want to
                        show up boldly without trying too hard.
                    </p>
                    <p>
                        Rooted in the energy of Lagos, our work reflects
                        movement, resilience, and individuality. Every piece is
                        designed to fit real lives, real bodies, and real
                        moments.
                    </p>
                </div>
                <div className="pt-10">
                    <h2 className="font-semibold underline">Our Story</h2>
                    <p className="py-5">
                        LeesLagos started with a simple idea: fashion should
                        feel personal, not forced.
                    </p>
                    <p className="py-5">
                        In a city that never slows down, we saw the need for
                        clothing that balances style with comfort, presence with
                        practicality. What began as a passion for clean design
                        and quality craftsmanship has grown into a brand that
                        represents self-expression and quiet confidence.
                    </p>
                    <p>
                        We are inspired by the streets, the people, and the
                        everyday hustle of Lagos — translating that energy into
                        pieces that speak without shouting.
                    </p>
                </div>
                <div className="pt-10">
                    <h2 className="font-semibold underline">
                        What We Stand For
                    </h2>
                    <div className="pt-3">
                        <strong className="">Confidence without noise</strong>
                        <p>
                            We believe great style doesn’t need to beg for
                            attention. Our designs are intentional, refined, and
                            expressive.
                        </p>
                    </div>
                    <div className="py-5">
                        <strong className="">Quality over trends</strong>
                        <p>
                            We focus on pieces that last — in construction, in
                            relevance, and in how they make you feel.
                        </p>
                    </div>
                    <div className="">
                        <strong className="">Authenticity always</strong>
                        <p>
                            LeesLagos is proudly African, proudly Lagos, and
                            unapologetically original.
                        </p>
                    </div>
                </div>
                <div className="pt-10">
                    <h2 className="font-semibold underline">
                        Our Design Philosophy
                    </h2>
                    <p className="py-5">
                        We design with balance in mind — modern silhouettes,
                        thoughtful details, and wearable comfort.
                    </p>
                    <strong>Every collection is created to:</strong>

                    <ul className="py-3 list-disc list-inside">
                        <li>Fit seamlessly into everyday life.</li>
                        <li>Elevate simple moments.</li>
                        <li>Allow the wearer’s personality to lead.</li>
                    </ul>
                    <p>
                        Our goal is not to define you, but to support how you
                        already show up in the world.
                    </p>
                </div>
                <div className="pt-10">
                    <h2 className="font-semibold underline">Made for You</h2>
                    <p className="py-5">
                        LeesLagos is for individuals who value self-expression,
                        confidence, and subtle sophistication. Whether you’re
                        stepping out for work, a casual outing, or a statement
                        moment, our pieces are designed to move with you.
                    </p>
                    <p className="">
                        This is fashion that adapts to your rhythm — not the
                        other way around.
                    </p>
                </div>
                <div className="pt-10">
                    <h2 className="font-semibold underline">Looking Ahead</h2>
                    <p className="py-5">
                        We’re building more than a clothing brand. LeesLagos is
                        growing into a creative space where culture, design, and
                        community intersect.
                    </p>
                    <p className="">
                        As we evolve, our commitment remains the same: to create
                        meaningful pieces that feel authentic, intentional, and
                        proudly Lagos.
                    </p>
                </div>

                <div className="py-10">
                    <h2 className="font-semibold">Welcome to LeesLagos</h2>
                    <p>This is not just what we wear.</p>
                    <p>It’s how we show up.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
 