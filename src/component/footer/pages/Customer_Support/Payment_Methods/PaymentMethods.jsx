import "./paymentMethods.css";

const PaymentMethods = () => {
  return (
    <>
      <div id="paymentMethods">
        <div>
          <div>
            <h2 id="paymentMethodsHeading">PAYMENT METHODS</h2>
          </div>
        </div>
        <div id="paymentmContent">
          <p>
            <strong>PAYMENT METHODS</strong>
          </p>
          <p>
            At Ahika.in, We ensure secured and seamless payment experience while
            placing order.&nbsp;
          </p>
          <p>
            All online payments are processed through Razorpay which provides
            secure, encrypted connections for all credit card, debit card,
            wallet and Net Banking transactions.
          </p>
          <p>
            You can choose your preferred payment method during the checkout
            process on the website.
          </p>
          <p>
            <strong>Types of Payment Methods Razorpay Offers: -</strong>
          </p>
          <ul>
            <li>Credit/Debit card payments:</li>
            <li>UPI/QR</li>
            <li>Net Banking</li>
            <li>
              Wallet: -
              <ol>
                <li>PhonePe</li>
                <li>Amazon Pay</li>
                <li>Mobiwik</li>
                <li>Freecharge</li>
                <li>Airtel Money</li>
                <li>Ola Money</li>
                <li>Jio Money</li>
                <li>PayZapp</li>
              </ol>
            </li>
            <li>
              Cash on Delivery: -{" "}
              <span>COD available from 999/- to 4999/- in India only</span>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>Prices &amp; Taxes: - </strong>
          </p>
          <p>
            Currently, only US Dollar and Indian Rupees currencies are accepted
            to make online payments
          </p>
          <p>
            For Indian customers, all product prices for customers in India are
            inclusive of all taxes and duties
          </p>
          <p>
            For International customers, all product prices are exclusive of all
            import duties according to their countries.
          </p>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
