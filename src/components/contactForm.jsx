const ContactForm = () => {
    return (
        <div className="p-5">
            <p className="py-4">
                Fill out the form below and a member of the LeesLagos team will
                get back to you shortly.
            </p>
            <form
                className=" py-6
                    px-1.5 flex flex-col gap-5"
            >
                <div className="flex flex-col ">
                    <label htmlFor="fullName" className="font-bold mb-1">
                        Full name:
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="border-b-2 border-gray-100 px-2
                                py-1 outline-0
                            "
                        placeholder="Enter your full name..."
                    />
                </div>
                <div className="flex flex-col  ">
                    <label htmlFor="email" className="font-bold mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="border-b-2 border-gray-100 px-2
                                py-1 outline-0
                            "
                        placeholder="Enter your email address..."
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="font-bold">
                        Phone Number:
                    </label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        className="border-b-2 border-gray-100 px-2
                                py-1 outline-0
                            "
                        placeholder="Enter your phone number..."
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject" className="font-bold">
                        Subject:
                    </label>
                    <select
                        className="py-2 bg-white outline-none w-fit "
                        id="subject"
                        name="subject"
                    >
                        <option value="order">Order issue</option>
                        <option value="delivery">Delivery</option>
                        <option value="product">Product enquiry</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="font-bold">
                        Measage:{" "}
                    </label>
                    <textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows="10"
                        className="outline-none ring-2 ring-gray-100 p-3
                            rounded-md"
                    ></textarea>
                </div>

                <button
                    className="outline-none p-2 rounded-md font-bold
                        bg-primary-dark text-white"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
