import NavBar from "../components/navBar";
import Footer from "../sections/footer";

import Heading from "../components/heading";
import ContactForm from "../components/contactForm";

const Contact = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className="p-4 bg-gray-100 rounded-md w-[90%] m-auto my-5">
                    <Heading text="Contact LeesLagos" />

                    <p className="pt-1 pb-4">
                        Have a question about an order, delivery, or our
                        products? We’re always happy to help.
                    </p>
                    <p>We typically respond within 24 hours.</p>
                </div>

                <div
                    className="py-8 grid grid-cols-1 items-center
                    place-content-center gap-4 bg-gray-100
                rounded-md px-5"
                >
                    <div className="bg-white p-2 rounded-md">
                        <h2 className="font-bold">Customer support</h2>
                        <p className="text-sm tracking-tight">
                            For orders, delivery, complaints.
                        </p>
                        <ul className="py-2">
                            <li>
                                <b>Email: </b>
                                support@leeslagos.com
                            </li>
                            <li>
                                <b>WhatsApp:</b> +234 XXX XXX XXXX
                            </li>
                            <li>
                                <b>Support Hours: </b>
                                Monday – Saturday, 9am – 6pm
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-2 rounded-md">
                        <h2 className="font-bold">Sales & Wholesale</h2>
                        <p className="text-sm tracking-tight">
                            For bulk orders, collaborations, or business
                            enquiries.
                        </p>
                        <ul className="py-2">
                            <li>
                                <b>Email: </b>
                                sales@leeslagos.com
                            </li>
                            <li>
                                <b>WhatsApp:</b> +234 XXX XXX XXXX
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                        <h2 className="font-bold">General support</h2>
                        <p className="text-sm tracking-tight">
                            Not sure who to contact? Send us a message using the
                            form below and we’ll direct it to the right team.
                        </p>
                    </div>
                </div>
                <ContactForm />
                <div className="p-5 grid grid-cols-1 gap-4">
                    <div>
                        <h1 className="font-semibold">Business Name:</h1>
                        <p>LeesLagos</p>
                    </div>
                    <div>
                        <h1 className="font-semibold">Operating Model:</h1>
                        <p>
                            LeesLagos operates primarily online to serve
                            customers quickly and efficiently.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-semibold">Business Hours:</h1>
                        <p>Monday – Saturday 9:00am – 6:00pm</p>
                    </div>
                    <div className="py-5">
                        <hr />
                        <h2 className="py-4 font-semibold">
                            Trusted by customers across Lagos and beyond.
                        </h2>
                        <p className="">
                            Follow us on Instagram for updates, new arrivals,
                            and customer reviews:
                        </p>
                        <strong>@leeslagos</strong>
                    </div>
                </div>
                <div className="px-5 py-3.5">
                    <Heading text="Helpful links" />
                    <p className="">
                        Before sending a message, you may find these helpful:
                    </p>
                    <ul className="py-3 list-disc list-inside">
                        <li>Track your order</li>
                        <li>Delivery timelines</li>
                        <li>Returns & exchanges policy</li>
                    </ul>

                    <p className="py-4 ">
                        Your satisfaction matters to us. Every message is read
                        and handled with care.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
