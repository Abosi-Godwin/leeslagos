import { useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import NavBar from "../components/navBar";
import Footer from "../sections/footer";

function OrderSummary() {
  const location = useLocation();
  const { reference, status, message, customerAndOrderDatas } = location.state || {};

  console.log(reference, status, message);
  console.log(customerAndOrderDatas);
  return (
    <>
      <NavBar />
      <div className=" py-10 px-5">
        <div className="rounded-md w-[90%] bg-primary-light m-[0_auto] py-8 ">
          <div
            className="h-32 w-32
       [clip-path:polygon(50%_0%,83%_12%,100%_43%,94%_78%,68%_100%,32%_100%,6%_78%,0%_43%,17%_12%)]
        bg-primary-dark m-[0_auto] flex items-center
        justify-center"
          >
            <FaCheck className="text-neutral-50 text-7xl m-[0_auto]" />
          </div>
          <h1
            className="m-[0_auto] text-xl font-bold text-primary-dark
            text-center py-4"
          >
            Order Placed Successfully!
          </h1>
          <p className="text-sm tracking-tight text-center text-primary-dark">
            Thank you for shopping with LeesLagos. Your order has been received and is now being
            processed.
          </p>
        </div>

        <div className="border-2 border-gray-100 rounded-md p-5">
          <h1 className="text-xl ">Order Summary</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderSummary;

/*
<SuccessPage>
  
  <HeaderSuccessIcon />   ✓ A large green checkmark
  
  <Title>
    
  </Title>
  
  <SmallMessage>
    
  </SmallMessage>

  <OrderCard>
    
    <Row>
      <label>Order ID:</label>
      <value>#order-2025-abcd12</value>
    </Row>

    <Row>
      <label>Date:</label>
      <value>Dec 8, 2025</value>
    </Row>

    <Row>
      <label>Customer:</label>
      <value>Godwin Abosi</value>
    </Row>

    <Divider />

    <CartItemsSection>
      <!-- List of purchased items with thumbnail, title, qty, price -->
    </CartItemsSection>

    <Divider />

    <TotalsSection>
      <Row>
        <label>Subtotal</label>
        <value>₦15,500</value>
      </Row>
      <Row>
        <label>Delivery Fee</label>
        <value>₦1,500</value>
      </Row>
      <RowBold>
        <label>Total Paid</label>
        <value>₦17,000</value>
      </RowBold>
    </TotalsSection>
  
  </OrderCard>

  <Actions>
    <PrimaryButton>Track Order</PrimaryButton>
    <SecondaryButton>Continue Shopping</SecondaryButton>
  </Actions>
[✔️] Order Successful!

Thank you for shopping with LeesLagos

─────────────────────────
 ORDER SUMMARY
─────────────────────────
Reference: dfae5320...
Status: Approved
Message: Payment successful
Date: Dec 9, 2025

─────────────────────────
 ITEMS (3)
─────────────────────────
• Black Hoodie — Qty: 1 — ₦12,000
• Body Lotion — Qty: 2 — ₦8,000
• Lip Gloss — Qty: 1 — ₦3,500

Subtotal: ₦23,500
Delivery: ₦1,500
Total Paid: ₦25,000

─────────────────────────
 SHIPPING
─────────────────────────
Name: Abosi God
Phone: 090xxxxxxx
Address: 23 Market Road, Lagos

─────────────────────────
 PAYMENT
─────────────────────────
Method: Paystack
Transaction ID: 5619505157
Currency: NGN
─────────────────────────

[ Track Order ]   [ Continue Shopping ]
</SuccessPage>*/
