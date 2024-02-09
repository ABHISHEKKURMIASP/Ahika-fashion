import { useState } from "react";
import "./returnAndExchanges.css";

function ReturnAndExchanges() {
    const [emailPhoneValid, setEmailPhoneValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [orderDetailsMatch, setOrderDetailsMatch] = useState(true);

    const handleOrderNumberChange = (event) => {
        const input = event.target;
        // Allow only numbers in the order number input
        input.value = input.value.replace(/[^0-9]/g, "");
    };

    const handleEmailPhoneChange = (event) => {
        const input = event.target;
        // Check if the input is a valid email or phone number
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value) || /^[0-9]+$/.test(input.value);

        // Update the email/phone validity state
        setEmailPhoneValid(isValid);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Mark the form as submitted
        setFormSubmitted(true);

        // Check if the email/phone is valid before submitting the form
        if (!emailPhoneValid) {
            return;
        }

        // Simulate order details comparison (replace with your logic)
        const exampleOrderDetails = {
            orderNumber: "123456",
            email: "user@example.com",
            phone: "1234567890",
        };

        const enteredOrderDetails = {
            orderNumber: document.getElementById("orderNumber").value,
            emailPhone: document.getElementById("emailPhone").value,
        };

        // Replace this with your actual logic to compare order details
        const match = exampleOrderDetails.orderNumber === enteredOrderDetails.orderNumber &&
            (exampleOrderDetails.email === enteredOrderDetails.emailPhone || exampleOrderDetails.phone === enteredOrderDetails.emailPhone);

        // Update the state based on whether the order details match
        setOrderDetailsMatch(match);
    };

    return (
        <>
            <div id="returnExchanges">
                <div>
                    <div id="returnExchangesheadings">
                        <h3>Returns & Exchanges</h3>
                        <p id="detailEnter">Enter your order number and Email or Phone to find your order</p>
                    </div>
                    <form id="returnform" onSubmit={handleSubmit}>
                        {formSubmitted && !orderDetailsMatch && (
                            <p className="error-message">No matching order found.</p>
                        )}
                        <input
                            type="text"
                            placeholder="Order Number"
                            id="orderNumber"
                            onChange={handleOrderNumberChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Email or Phone"
                            id="emailPhone"
                            onChange={handleEmailPhoneChange}
                            className={!emailPhoneValid && formSubmitted ? "invalid-input" : ""}
                            required
                        />
                        {!emailPhoneValid && formSubmitted && (
                            <p className="error-message">Please enter a valid email or phone number.</p>
                        )}
                        <button type="submit" id="returnExchangesubmit">
                            FIND YOUR ORDER
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ReturnAndExchanges;
