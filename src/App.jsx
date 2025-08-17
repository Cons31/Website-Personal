import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// Data produk awal
const initialProducts = [
  { id: 1, name: "Sepatu", price: 300000 },
  { id: 2, name: "Kaos", price: 100000 },
  { id: 3, name: "Celana", price: 200000 },
];

function App() {
  const [cart, setCart] = useState([]);

  // Tambah ke keranjang
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Hapus dari keranjang (berdasarkan index item)
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Toko Online</h1>
      <ProductList products={initialProducts} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
