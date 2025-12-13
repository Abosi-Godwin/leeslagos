import { formatCurrency } from "../utils/currencyFormater";

const OrderedItems = ({ items }) => {
  return (
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
          {items.map((data) => (
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
  );
};
export default OrderedItems;
