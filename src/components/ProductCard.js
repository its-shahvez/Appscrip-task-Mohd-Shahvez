import React from 'react';
import { Heart } from 'lucide-react'; // Icon
import './ProductCard.css'; // Nayi CSS file

const ProductCard = ({ product, index }) => {
  // 'product' prop se data lega
  // 'index' prop ko animation delay ke liye use karenge

  const animationDelay = {
    '--animation-delay': `${index * 50}ms`
  };

  return (
    <div className="product-card" style={animationDelay}>
      <div className="product-image-wrapper">
        {/* Check karega ki hover image hai ya nahi */}
        {product.hasHover && product.hoverImage ? (
          <>
            <img
              className="front-image"
              alt={product.name}
              src={product.frontImage}
            />
            <img
              className="hover-image"
              alt={product.name}
              src={product.hoverImage}
            />
          </>
        ) : (
          <img
            className="front-image"
            alt={product.name}
            src={product.frontImage}
          />
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        
        <p className="product-price">
          Sign in or Create an account to see pricing
        </p>

        <button className="wishlist-button" aria-label="Add to wishlist">
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;