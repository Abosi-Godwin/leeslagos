function OrderTimeline() {
  return (
    <div>
      <h1 className="text-xl font-bold">Order Timeline</h1>
      <ul className="pt-5 pb-1.5">
        <li className="font-bold">
          Order placed: <span className="font-normal">2025/12/12-11 AM</span>
        </li>
        <li className="font-bold">
          Payment confirmed: <span className="font-normal">2025/12/12-11 AM</span>
        </li>
        <li className="font-bold">
          Order processing: <span className="font-normal"> 2025/12/12-11 AM</span>
        </li>
        <li className="font-bold">
          Shipped: <span className="font-normal">Pending</span>
        </li>
        <li className="font-bold">
          Delivered: <span className="font-normal">Pending</span>
        </li>
      </ul>
      <p className="text-sm tracking-tight">
        Please ensure your phone number is reachable for delivery updates.
      </p>
    </div>
  );
}
export default OrderTimeline;
