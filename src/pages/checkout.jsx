import { useForm } from "react-hook-form";

import { useAuth } from "../contexts/auth";
import { useCart } from "../contexts/cart";
import { formatCurrency } from "../utils/currencyFormater";
import NavBar from "../components/navBar.jsx";
import Footer from "../sections/footer.jsx";

import Input from "../components/input";
import Button from "../components/button";

const Checkout = () => {
  const { register } = useForm();
  const { auth } = useAuth();
  const { cart } = useCart();

  const { email, displayName } = auth?.currentUser;

  return (
    <>
      <NavBar />
      <div className="py-10">
        <h1 className="w-4/5 m-[0_auto]  text-xl font-bold">Billing details</h1>

        <form className="w-4/5 m-[0_auto] py-5 grid grid-cols-1 gap-4 items-center justify-center">
          <Input
            label="Full name *"
            inputType="text"
            placeholder="Enter your full name..."
            className="p-3 rounded-md outline-0 border"
            defaultVal={displayName}
            disable={false}
            register={register}
          />
          <Input
            label="Email address *"
            inputType="email"
            placeholder="Enter your email address..."
            className="p-3 rounded-md outline-0 border"
            disable={false}
            defaultVal={email}
            register={register}
          />
          <Input
            label="Street address *"
            inputType="text"
            placeholder="Enter your current address..."
            className="p-3 rounded-md outline-0 border"
            disable={false}
            register={register}
          />
          <Input
            label="Phone Number"
            inputType="number"
            placeholder="Enter your phone number..."
            className="p-3 rounded-md outline-0 border"
            disable={false}
            register={register}
          />
          <div className="">
            <p className="capitalize font-bold">Order note</p>
            <textarea
              placeholder="Write a small note or description..."
              rows="5"
              className="outline-0 border rounded-md p-3 w-full"
            ></textarea>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
            <div className="overflow-scroll">
              <table
                cellSpacing="5"
                className="w-96 border-separate border-spacing-y-4 m-[0_auto] border border-gray-50 overflow-scroll"
              >
                <thead className="border-b-2 border-gray-50 py-2">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody className="divide-y-2 divide-y-gray-100 py-6">
                  {cart.map((data) => (
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
                <tfoot>
                  <tr>
                    <th colSpan="3">Total:</th>
                    <td>$400</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div>
            <h1>Payment method</h1>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
            />
            <label htmlFor="card">Card</label>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
