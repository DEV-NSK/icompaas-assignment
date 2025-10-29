
// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PLACEHOLDER_IMAGE } from '../utils/constants';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }

    const result = await addToCart(product.id, 1);
    if (result.success) {
      alert('Product added to cart!');
    } else {
      alert(result.error);
    }
  };

  const discount = product.compare_price && product.compare_price > product.price 
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] group">
      <Link to={`/products/${product.id}`} className="block relative">
        <img
          src={product.image || PLACEHOLDER_IMAGE}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGE;
          }}
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {discount}% OFF
          </span>
        )}
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-indigo-600 mb-2 line-clamp-2 transition-colors text-sm leading-tight">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400 text-sm">
            {'★'.repeat(Math.floor(product.average_rating || 0))}
            {'☆'.repeat(5 - Math.floor(product.average_rating || 0))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.review_count || 0})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>
            {product.compare_price && product.compare_price > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.compare_price}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;