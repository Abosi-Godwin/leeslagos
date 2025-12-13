import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";

const OrderSupport = () => {
  return (
    <div className="pt-10">
      <h1 className="text-xl font-bold mb-1">Need help with this order?</h1>
      <p className="text-sm tracking-tight">
        If you have questions or neeed assistance, our support team is here to help.
      </p>
      <div className="pt-2 pb-4 flex flex-col items-start justify-evenly gap-2">
        <a
          href="https:wa.me/+2349066016591"
          className="flex items-center justify-center gap-1 p-2 ring-1 ring-gray-100 rounded-md "
        >
          <FaWhatsapp className="text-xl" /> Chat on Whatsapp
        </a>
        <a
          href="tel:+2349066016591"
          className="flex items-center justify-center gap-1 p-2 ring-1 ring-gray-100 rounded-md "
        >
          <FaPhone /> Call support
        </a>
        <a
          href="mailto:bbnl604604@gmail.com"
          className="flex items-center justify-center gap-1 p-2 ring-1  ring-gray-100 rounded-md"
        >
          <FaEnvelope /> Email support
        </a>
      </div>

      <p className="text-sm tracking-tight">Available Monday - Saturday, 9AM - 6PM.</p>
    </div>
  );
};

export default OrderSupport;
