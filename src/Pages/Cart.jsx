import React from 'react';
import { Link } from 'react-router-dom';
import HelloImage from '../Components/HelloImage';
import Interested from '../Components/Interested';
import './Cart.css';
import { useCart } from './Context/CartProvider';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = isNaN(item.price) ? 0 : item.price;
      const quantity = isNaN(item.quantity) ? 0 : item.quantity;
      return total + price * quantity;
    }, 0);
  };
  
  const calculateSubtotal = (price, quantity) => {
    const validPrice = isNaN(price) ? 0 : price;
    const validQuantity = isNaN(quantity) ? 0 : quantity;
    return validPrice * validQuantity;
  };
  
  const handleIncreaseQuantity = (item) => {
    addToCart(item, 1);
  };
  
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    } else {
      removeFromCart(item.id);
    }
  };
  return (
    <div className="cart">
      <HelloImage text="Cart" />
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cartTable">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cartItemImage" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantityControls">
                      <button onClick={() => handleDecreaseQuantity(item)}><span className="material-icons-outlined">remove</span></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item)}> <span className="material-icons-outlined">add</span></button>
                    </div>
                  </td>
                  <td>${calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="removeItemButton"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <span className="material-icons-outlined">close</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="totalAndInterested">
        <Interested />
        <div className="cartTotal">
          <div className="head">
            <h3>Cart totals</h3>
          </div>
          <div className="total">
            <div className="subTotal">
              <h5>Subtotal: <div className="num">${calculateTotalPrice().toFixed(2)}</div></h5>
            </div>
            <div className="totalPrice">
              <h5>Total: <div className="num">${calculateTotalPrice().toFixed(2)}</div></h5>
            </div>
          </div>
          <Link to='/checkout'>
            <div className="btn">
              <button className="checkoutButton">Proceed to Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
