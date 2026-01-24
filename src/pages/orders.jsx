import { useFireStore } from "../hooks/useFireStore";

import Heading from "../components/heading";
import Button from "../components/button";
import RecentOrders from "../components/recentOrders";
import NavBar from "../components/navBar";
import Footer from "../sections/footer";

const Orders = () => {
    const { orders } = useFireStore();
    const totalOrders = orders?.length;

    return (
        <>
            <NavBar />
            <section className="py-10 px-2">
                <div>
                    <Heading text="My orders" />
                    <p>You have {totalOrders || 0} orders in total.</p>
                </div>
                <div className="py-5">
                    <div className="grid grid-cols-1 gap-x-11">
                        <input
                            className="ring-2 ring-gray-200 outline-0 px-3 mb-4 py-1.5 rounded-md w-ffull"
                            type="search"
                            placeholder="Enter your order ID..."
                        />
                        <Button text="search" type="search" btn="primary" />
                    </div>
                </div>
                  <RecentOrders orders={orders} />
            </section>
            <Footer />
        </>
    );
};

export default Orders;
