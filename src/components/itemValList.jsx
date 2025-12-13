const ItemValList = () => {
  return (
    <div className="py-4">
      <h1 className="text-lg font-bold">Order overview</h1>
      <div className="py-2">
        <h1 className="font-bold">
          Order ID: <span className="font-normal">12345</span>
        </h1>
        <h1 className="font-bold">
          Order date: <span className="font-normal">12345</span>
        </h1>
        <h1 className="font-bold">
          Delivery date: <span className="font-normal">12345</span>
        </h1>
        <h1 className="font-bold">
          Payment Method: <span className="font-normal">Paystack</span>
        </h1>
        <h1 className="font-bold">
          Payment Status: <span className="font-normal">Paid</span>
        </h1>
      </div>
    </div>
  );
};
export default ItemValList