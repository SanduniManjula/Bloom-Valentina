import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Footer from "../components/footer";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", address: "" });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); // Only re-run the effect if `cart` changes

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of user data and payment method
    // For simplicity, let's just console log the data
    console.log("User Data:", userData);
    console.log("Payment Method:", paymentMethod);
    // Simulate a successful checkout
    setTimeout(() => {
      setCheckoutSuccess(true);
    }, 2000);
  };

  return (
    <article>
      Your favorite choices are here!! Get ready to shop...

      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="total">
        <span>TOTAL PRICE OF CART</span>
        <span>Rs - {price}</span>
        
      </div>

      {!showCheckout && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}

      {showCheckout && !checkoutSuccess && (
        <div className="checkout-form">
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              required
            />
            <select value={paymentMethod} onChange={handlePaymentMethodChange} required>
              <option value="">Select Payment Method</option>
              <option value="credit_card">Credit Card</option>
              <option value="cash">Cash on Delivery</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {checkoutSuccess && (
        <div className="checkout-success">
          <h2>Checkout Successful!</h2>
          <p>Thank you for your purchase.</p>
         
        </div>
         
        
      )}
    </article>
   
  );
};

export default Cart;
