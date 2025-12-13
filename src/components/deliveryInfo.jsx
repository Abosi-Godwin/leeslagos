const DeliveryInfo = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Delivery Info</h1>
      <ul className="pt-5 pb-1.5">
        <li className="font-bold">
          Delivery method: <span className="font-normal">Home Delivery</span>
        </li>
        <li className="font-bold">
          Delivery Address: <span className="font-normal">Nonwa eudume</span>
        </li>
        <li className="font-bold">
          Phone: <span className="font-normal"> +234906616591</span>
        </li>
      </ul>
      <p className="text-sm tracking-tight">
        Please ensure your phone number is reachable for delivery updates.
      </p>
    </div>
  );
};
export default DeliveryInfo;
