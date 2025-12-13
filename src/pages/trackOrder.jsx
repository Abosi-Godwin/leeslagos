import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


import Input from "../components/input";
import Button from "../components/button";
import VerticalOrderStepper from "../components/verticalStepper";
import OrderOverview from "../components/orderOverview";
import OrderedItems from "../components/orderedItems";
import DeliveryInfo from "../components/deliveryInfo";
import OrderTimeline from "../components/orderTimeline";
import OrderSupport from "../components/orderSupport";
import NavBar from "../components/navBar";
import Footer from "../sections/footer";

const TrackOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (trackingDetails) => {
    const { orderId } = trackingDetails;
  };

  return (
    <>
      <NavBar />
      <div className="py-10 px-5">
        <div className="">
          <h1 className="text-xl font-bold">Track Your Order </h1>
          <p className="text-sm tracking-tight">Monitor your order progress in real-time.</p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="py-8 grid grid-cols-1 gap-1.5 "
        >
          <div>
            <Input
              valType="orderId"
              label="Order ID"
              inputType="text"
              placeholder="Enter your order id..."
              className="p-3 rounded-md outline-0 border w-full"
              disable={false}
              register={register}
            />
          </div>
          <Button
            text="start tracking"
            type="submit"
            disabled={false}
            loader={false}
          />
          <p className="text-sm tracking-tight">Didn't receive an order ID? check your email.</p>
        </form>
        <OrderOverview />
        <VerticalOrderStepper currentStatus="packaging" />
        <div className="py-8">
          <h1 className="text-xl font-bold mb-1">Ordered Items</h1>
          <OrderedItems items={[]} />
          <p className="text-sm tracking-tight">
            All orders are carefully inspected before delivery.
          </p>
        </div>
        <DeliveryInfo />
        <OrderTimeline />
        <OrderSupport />
      </div>
      <Footer />
    </>
  );
};

export default TrackOrder;
