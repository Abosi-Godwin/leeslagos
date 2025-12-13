import ItemValList from './itemValList';
const OrderOverview = () => {
  return (
    <div
      className="border-y p-2 divide-gray-100
        divide-y my-4"
    >
      <ItemValList />
      <div className="py-4">
        <h1 className="text-xl font-bold">Customer Info</h1>
        <div className="py-2">
          <h1 className="font-bold">
            Full Name: <span className="font-normal">12345</span>
          </h1>
          <h1 className="font-bold">
            Phone Number: <span className="font-normal">12345</span>
          </h1>
          <h1 className="font-bold">
            Address: <span className="font-normal">12345</span>
          </h1>
          <h1 className="font-bold">
            Note: <span className="font-normal">Paystack</span>
          </h1>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-xl font-bold">Price Summary</h1>
        <div className="py-2">
          <h1 className="font-bold">
            Subtotal: <span className="font-normal">12345</span>
          </h1>
          <h1 className="font-bold">
            Delivery fee: <span className="font-normal">12345</span>
          </h1>
          <h1 className="font-bold">
            Total amount: <span className="font-normal">12345</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default OrderOverview;
