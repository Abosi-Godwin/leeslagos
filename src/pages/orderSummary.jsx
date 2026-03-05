import { useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { formatCurrency } from "../utils/currencyFormater";

import NavBar from "../components/navBar";
import LinkTo from "../components/link";
import Footer from "../sections/footer";
import Button from "../components/button";
import OrderedItems from "../components/orderedItems";

import ReceiptPDF from "../assets/ReceiptPdf";

function OrderSummary() {
    const location = useLocation();

    const { reference, status, message, customerAndOrderDatas } =
        location?.state || {};

    const { ref, amount, date, email, firstname, lastname, phone, metadata } =
        customerAndOrderDatas || {};

    const { orderId, customerId, cartItems, shippingAddress, extraNotes } =
        metadata || {};

    const totalCart = cartItems?.length || [];

    return (
        <>
            <span className="print:hidden">
                <NavBar />
            </span>
            {!customerAndOrderDatas ? (
                <div className="text-center py-20">
                    <p>No order data found.</p>
                    <div className="w-4/8 py-4 inline-block">
                        <LinkTo to="/products" text="Go Shopping" />
                    </div>
                </div>
            ) : (
                <div className="py-10 px-5">
                    <div className="rounded-md bg-gray-100 m-[0_auto] py-8 ">
                        <div
                            className="h-32 w-32
       [clip-path:polygon(50%_0%,83%_12%,100%_43%,94%_78%,68%_100%,32%_100%,6%_78%,0%_43%,17%_12%)]
        bg-white m-[0_auto] flex items-center
        justify-center"
                        >
                            <FaCheck className="text-green-500 text-7xl m-[0_auto]" />
                        </div>
                        <h1 className="m-[0_auto] text-xl font-bold text-center py-4">
                            Order Placed Successfully!
                        </h1>
                        <p className="text-sm tracking-tight text-center">
                            Thank you for shopping with LeesLagos. Your order
                            has been received and is now being processed.
                        </p>
                    </div>
                    <div className="border-2 border-gray-100 rounded-md p-5 mt-5">
                        <h1 className="text-xl font-semibold">Order Summary</h1>
                        <div className="py-3">
                            <div className="flex">
                                <h1>
                                    Reference:
                                    <span> {reference}</span>
                                </h1>
                            </div>
                            <div className="flex">
                                <h1>
                                    Status:
                                    <span> {status}</span>
                                </h1>
                            </div>
                            <div className="flex">
                                <h1>
                                    Message:
                                    <span> {message}</span>
                                </h1>
                            </div>
                            <div className="flex">
                                <h1>
                                    Date:
                                    <span> {date}</span>
                                </h1>
                            </div>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>

                        <h1 className="text-xl font-semibold">
                            Ordered {totalCart >= 2 ? "items" : "item"} (
                            {totalCart})
                        </h1>

                        <div className="py-5">
                            <OrderedItems items={cartItems} />
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h1 className="text-xl font-semibold">Shipping</h1>

                        <div className="py-5">
                            <h1 className="font-bold">
                                Name:{" "}
                                <span className="font-normal">
                                    {firstname + " " + lastname}
                                </span>
                            </h1>
                            <h1 className="font-bold">
                                Order ID:{" "}
                                <span className="font-normal">{orderId}</span>
                            </h1>
                            <h1 className="font-bold">
                                Phone:{" "}
                                <span className="font-normal">{phone}</span>
                            </h1>
                            <h1 className="font-bold">
                                Address:{" "}
                                <span className="font-normal">
                                    {" "}
                                    {shippingAddress}
                                </span>
                            </h1>
                            <h1 className="font-bold">
                                Note:{" "}
                                <span className="font-normal">
                                    {" "}
                                    {extraNotes}
                                </span>
                            </h1>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h1 className="text-xl font-semibold">Payment</h1>

                        <div className="py-5">
                            <h1 className="font-bold">
                                Subtotal:{" "}
                                <span className="font-normal">
                                    {formatCurrency(amount / 100)}
                                </span>
                            </h1>
                            <h1 className="font-bold">
                                Delivery:{" "}
                                <span className="font-normal"> free</span>
                            </h1>
                            <h1 className="font-bold">
                                Total Paid:{" "}
                                <span className="font-normal">
                                    {" "}
                                    {formatCurrency(amount / 100)}
                                </span>
                            </h1>
                            <h1 className="font-bold">
                                Method:{" "}
                                <span className="font-normal">PayStack</span>
                            </h1>
                            <h1 className="font-bold">
                                Transaction ID:{" "}
                                <span className="font-normal">{ref}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="py-4 grid grid-cols-1  justify-between gap-4 items-center print:hidden">
                        <LinkTo
                            to={`/trackOrder?orderId=${orderId}`}
                            text="Track Order"
                            type="primary"
                        />
                        <LinkTo
                            to="/products"
                            text="Continue shopping"
                            type="secondary"
                        />
                    </div>

                    <div
                        className="p-4 bg-neutral-700 text-neutral-50
                    rounded-md my-14 print:hidden"
                    >
                        <p className="mb-2">
                            An invoice and tracking details have been sent to{" "}
                            <strong>{email}</strong>.
                        </p>
                         
                        <PDFDownloadLink
                            document={
                                <ReceiptPDF data={customerAndOrderDatas} />
                            }
                            fileName={`receipt_${orderId}.pdf`}
                            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
                        >
                            {({ loading }) =>
                                loading
                                    ? "Generating receipt..."
                                    : "Download Receipt (PDF)"
                            }
                        </PDFDownloadLink>
                    </div>
                </div>
            )}
            <span className="print:hidden">
                <Footer />
            </span>
        </>
    );
}

export default OrderSummary;
