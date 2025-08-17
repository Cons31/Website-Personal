import React from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-box">
      <h2>Keranjang</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rp {item.price.toLocaleString()}
              <button onClick={() => removeFromCart(index)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rp {total.toLocaleString()}</h3>
    </div>
  );
}

export default Cart;
