import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login"; 
import "./App.css";

const initialProducts = [ { id: 1, name: "MOTOR LISTRIK ELECTRUM", price: 12000000, description: 'Motor listrik Electrum H5 resmi diperkenalkan di Indonesia. Skuter ramah lingkungan ini belum dijual untuk umum dan baru hanya disewakan untuk mitra driver Gojek, untuk layanan GoRide Electric. Electrum H5 ke depannya juga bakal dijual untuk konsumen umum dengan harga diklaim lebih murah dari Honda Vario. Seperti apa spesifikasinya', image: "/assets/E.jpg", }, { id: 2, name: "MOTOR LISTRIK POLYTRON", price: 8500000, description: 'Motor listrik Polytron, khususnya model Fox S, Fox R, dan Fox 500, menawarkan alternatif transportasi ramah lingkungan dengan performa yang baik dan fitur canggih. Beberapa spesifikasi unggulan meliputi jarak tempuh yang cukup, kecepatan maksimal yang bervariasi di setiap model, serta desain futuristik dengan lampu LED dan panel instrumen digital. ', image: "/assets/P.jpg", }, { id: 3, name: "MOTOR LISTRIK VIAR", price: 9500000, description: 'Viar menyediakan berbagai produk sepeda dan motor listrik dengan spesifikasi yang berbeda-beda. Motor listrik Viar, seperti Viar EV1 dan Viar Q1, menggunakan baterai Lithium-ion dengan berbagai kapasitas dan daya, misalnya 60V 23AH. Sepeda listrik Viar, seperti Viar A2, Viar Vitron O2, dan Viar Akasha, menggunakan baterai Lead Acid dengan kapasitas 48V/20Ah atau 48V 12Ah, dan daya motor BLDC 350-700 Watt.' , image: "/assets/V.jpg", }, { id: 4, name: "MOTOR LISTRIK GESITS", price: 28000000, description: 'Motor listrik Gesits menggunakan tenaga listrik dengan daya motor 5KW. Sekali pengisian daya, motor listrik Gesits bisa digunakan untuk berkendara sejauh sekitar 50 kilomter untuk baterai tunggal dan 100 kilometer untuk baterai ganda.' , image: "/assets/G.jpg", }, { id: 5, name: "MOTOR LISTRIK SMOOT", price: 27000000, description: 'Motor listrik Smoot adalah produk lokal yang memfokuskan pada penggunaan baterai tukar (swap) dan memiliki beberapa model seperti Zuzu, Tempur, dan DeSultan.' , image: "/assets/C.jpg", }, { id: 6, name: "MOTOR LISTRIK UWINFLY", price: 25000000, description: 'Motor listrik Uwinfly adalah merek sepeda listrik dan motor listrik yang diproduksi oleh pabrikan Uwinfly di China. Mereka menawarkan berbagai jenis kendaraan listrik, mulai dari sepeda listrik ringan hingga motor listrik dengan desain lebih modern.' , image: "/assets/U.jpg", }, ];

function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // cek status login saat halaman dibuka
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // hapus status login
    setIsLoggedIn(false);
    navigate("/login"); // arahkan ke halaman login
  };

  return (
    <div className="app-container">
      <h1>Selamat Datang Ditoko Electric Motor</h1>

      {/* Tombol Login / Logout */}
      {isLoggedIn ? (
  <button onClick={handleLogout} className="btn-custom btn-logout">
    Logout
  </button>
) : (
  <Link to="/login">
    <button className="btn-custom btn-login">
      Login
    </button>
  </Link>
)}

      <button 
  className="btn-custom btn-cart" 
  onClick={() => setShowCart(!showCart)}
>
  {showCart ? "Tutup Keranjang" : "Lihat Keranjang"}
</button>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <ProductList products={initialProducts} addToCart={addToCart} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
