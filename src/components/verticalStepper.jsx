import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
const STEPS = [
  {
    key: "received",
    title: "Order Received",
    description: "We’ve received your order and payment.",
  },
  { key: "processing", title: "Processing", description: "Your items are being prepared." },
  {
    key: "packaging",
    title: "Packaging",
    description: "Your order is being packed and readied for dispatch.",
  },
  { key: "shipped", title: "Shipped", description: "Your order is on the way to you." },
  {
    key: "delivered",
    title: "Delivered",
    description: "Your order has been successfully delivered.",
  },
];

export default function VerticalOrderStepper({ currentStatus, timestamps = {} }) {
  const currentIndex = STEPS.findIndex((step) => step.key === currentStatus);

  return (
    <div className="w-full max-w-md mx-auto my-5 pt-10">
      <h1 className="text-lg font-bold mb-4">Order Status</h1>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gray-300" />

        <ul className="space-y-6">
          {STEPS.map((step, index) => {
            const isCompleted = index < currentIndex;
            const isCurrent = index === currentIndex;

            return (
              <li
                key={step.key}
                className="relative flex gap-4"
              >
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  {isCompleted ? (
                    <FaCircleCheck className="h-8 w-8 text-green-600" />
                  ) : (
                    <FaRegCircleCheck
                      className={`h-8 w-8 ${isCurrent ? "text-amber-600" : "text-gray-400"}`}
                      fill={isCurrent ? "currentColor" : "none"}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <p
                    className={`font-medium ${
                      isCurrent ? "text-amber-700" : isCompleted ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>

                  {isCurrent && <p className="text-sm text-gray-600 mt-1">{step.description}</p>}

                  {isCompleted && timestamps[step.key] && (
                    <p className="text-xs text-gray-500 mt-1">{timestamps[step.key]}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
