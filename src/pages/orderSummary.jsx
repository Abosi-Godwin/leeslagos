import { useLocation, Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import { formatCurrency } from "../utils/currencyFormater";

import NavBar from "../components/navBar";
import Footer from "../sections/footer";
import Button from "../components/button";

function OrderSummary() {
  const location = useLocation();
  const { reference, status, message, customerAndOrderDatas } = location?.state || {};
  const { ref, amount, date, email, firstname, lastname, phone, metadata } =
    customerAndOrderDatas || {};
  const { orderId, customerId, cartItems, shippingAddress, extraNotes } = metadata || {};
  const totalCart = cartItems?.length || [];
  return (
    <>
      <NavBar />
      <div className=" py-10 px-5">
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
            Thank you for shopping with LeesLagos. Your order has been received and is now being
            processed.
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
            Ordered {totalCart >= 2 ? "items" : "item"} ({totalCart})
          </h1>

          <div className="overflow-scroll  no-scrollbar">
            <table
              cellSpacing="5"
              className="w-96 border-separate border-spacing-y-4 m-[0_auto]
              border border-gray-50"
            >
              <thead className="border-b-2 border-gray-50 py-2">
                <tr>
                  <th className="px-2">Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody className="divide-y-2 divide-y-gray-100 py-6">
                {cartItems.map((data) => (
                  <tr
                    key={data.id}
                    className="bg-white rounded-xl shadow-sm"
                  >
                    <td className="p-2">
                      <img
                        className="size-8"
                        src={data.image}
                      />
                    </td>
                    <td className="text-sm p-2">{data.name}</td>
                    <td className="p-2">{data.quantity}</td>
                    <td className="p-2">{formatCurrency(data.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="py-5">
            <h1 className="font-bold">
              Subtotal: <span className="font-normal">{formatCurrency(amount / 100)}</span>
            </h1>
            <h1 className="font-bold">
              Delivery: <span className="font-normal"> free</span>
            </h1>
            <h1 className="font-bold">
              Total Paid: <span className="font-normal"> {formatCurrency(amount / 100)}</span>
            </h1>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <h1 className="text-xl font-semibold">Shipping</h1>

          <div className="py-5">
            <h1 className="font-bold">
              Name: <span className="font-normal">{firstname + " " + lastname}</span>
            </h1>
            <h1 className="font-bold">
              Order ID: <span className="font-normal">{orderId}</span>
            </h1>
            <h1 className="font-bold">
              Phone: <span className="font-normal">{phone}</span>
            </h1>
            <h1 className="font-bold">
              Address: <span className="font-normal"> {shippingAddress}</span>
            </h1>
            <h1 className="font-bold">
              Note: <span className="font-normal"> {extraNotes}</span>
            </h1>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <h1 className="text-xl font-semibold">Payment</h1>

          <div className="py-5">
            <h1 className="font-bold">
              Method: <span className="font-normal">PayStack</span>
            </h1>
            <h1 className="font-bold">
              Transaction ID: <span className="font-normal">{ref}</span>
            </h1>
          </div>
        </div>
        <div className="py-4 grid grid-cols-1  justify-between gap-4 items-center">
          <Link to="/trackOrder">
            <Button
              type="btn"
              text="Track Order"
              loading={false}
            />
          </Link>

          <Link to="/products">
            <Button
              type="btn"
              btn="secondary"
              text="Continue Shopping"
              loading={false}
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderSummary;