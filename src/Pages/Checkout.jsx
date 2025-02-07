import React, { useCallback, useState } from "react";
import HelloImage from "../Components/HelloImage";
import "./Checkout.css";
import { useCart } from "./Context/CartProvider";

    const Checkout = () => {
        const { cart } = useCart();
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            address: "",
            city: "",
            zip: "",
            country: "",
        });
        const [isFormValid, setIsFormValid] = useState(false);
        const orderItems = cart;
        const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const total = subtotal;
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
        const checkFormValidity = useCallback(() => {
            const isValid = Object.values(formData).every((field) => field.trim() !== "");
            setIsFormValid(isValid);
        }, [formData]);
        const handleSubmit = (e) => {
            e.preventDefault();
            if (isFormValid) {
                alert("Order Placed Successfully!");
            } else {
                alert("Please fill in all required fields.");
            }
        };
    
        React.useEffect(() => {
            checkFormValidity();
        }, [formData, checkFormValidity]);
    return (
        <div className="checkoutPage">
            <HelloImage text="Check Out" />
            <h2>Checkout Details</h2>
            <div className="checkoutContainer">
                <form className="billingForm" onSubmit={handleSubmit}>
                    <h3>Billing Details</h3>
                    <div className="formGroup">
                        <label>Full Name <span>*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Email Address <span>*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Address <span>*</span></label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>City <span>*</span></label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>ZIP Code <span>*</span></label>
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Country <span>*</span></label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="btn">
                            <button
                                type="submit"
                                className="checkoutBtn"
                                disabled={!isFormValid}
                            >
                                Place Order
                            </button>
                    </div>
                </form>
                <div className="orderSummary">
                        <h3>Your Order</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.name} <b>× {item.quantity}</b>
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr className="subtotal">
                                    <td>Subtotal</td>
                                    <td>${subtotal.toFixed(2)}</td>
                                </tr>
                                <tr className="total">
                                    <td><b>Total</b></td>
                                    <td><b>${total.toFixed(2)}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    );
};

export default Checkout;
