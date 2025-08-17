import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345") {
      alert("Login berhasil!");
      localStorage.setItem("isLoggedIn", "true"); // simpan status login
      navigate("/"); // redirect ke halaman utama
    } else {
      alert("Email atau Password salah!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ background: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <button 
          type="submit" 
          style={{ width: "100%", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
