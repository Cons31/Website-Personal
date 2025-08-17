import React, { useState } from "react";
import "./ProductItem.css";

function ProductItem({ product, addToCart }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        {isExpanded
          ? product.description
          : `${product.description.slice(0, 100)}...`}
        <button className="read-more-btn" onClick={toggleDescription}>
          {isExpanded ? " Read Less" : " Read More"}
        </button>
      </p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Masukkan ke Keranjang
      </button>
    </div>
  );
}

export default ProductItem;
