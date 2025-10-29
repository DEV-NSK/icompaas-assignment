// // src/pages/ProductDetail.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../services/api';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';
// import { PLACEHOLDER_IMAGE } from '../utils/constants';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useCart();
//   const { isAuthenticated } = useAuth();

//   useEffect(() => {
//     fetchProduct();
//     fetchReviews();
//   }, [id]);

//   const fetchProduct = async () => {
//     try {
//       const response = await api.get(`/api/products/${id}/`);
//       setProduct(response.data);
//     } catch (error) {
//       console.error('Failed to fetch product:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchReviews = async () => {
//     try {
//       const response = await api.get(`/api/products/${id}/reviews/`);
//       console.log('Reviews response:', response.data);
      
//       // Handle different response structures
//       let reviewsData = [];
//       if (Array.isArray(response.data)) {
//         reviewsData = response.data;
//       } else if (response.data && Array.isArray(response.data.results)) {
//         reviewsData = response.data.results;
//       } else if (response.data) {
//         reviewsData = [response.data];
//       }
      
//       setReviews(reviewsData);
//     } catch (error) {
//       console.error('Failed to fetch reviews:', error);
//       setReviews([]); // Set to empty array on error
//     }
//   };

//   const handleAddToCart = async () => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }

//     const result = await addToCart(product.id, quantity);
//     if (result.success) {
//       alert('Product added to cart!');
//     } else {
//       alert(result.error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-12">
//         <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div>
//           <img
//             src={product.image || PLACEHOLDER_IMAGE}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-lg"
//             onError={(e) => {
//               e.target.src = PLACEHOLDER_IMAGE;
//             }}
//           />
//           {product.images && Array.isArray(product.images) && product.images.length > 0 && (
//             <div className="grid grid-cols-4 gap-2 mt-4">
//               {product.images.map((image) => (
//                 <img
//                   key={image.id}
//                   src={image.image}
//                   alt={image.alt_text || product.name}
//                   className="w-full h-20 object-cover rounded cursor-pointer"
//                   onError={(e) => {
//                     e.target.src = PLACEHOLDER_IMAGE;
//                   }}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          
//           <div className="flex items-center mb-4">
//             <div className="flex text-yellow-400 text-lg">
//               {'★'.repeat(Math.floor(product.average_rating || 0))}
//               {'☆'.repeat(5 - Math.floor(product.average_rating || 0))}
//             </div>
//             <span className="text-gray-600 ml-2">
//               ({product.review_count || 0} reviews)
//             </span>
//           </div>

//           <div className="mb-6">
//             <span className="text-3xl font-bold text-gray-900">${product.price}</span>
//             {product.compare_price && product.compare_price > product.price && (
//               <span className="text-xl text-gray-500 line-through ml-2">
//                 ${product.compare_price}
//               </span>
//             )}
//           </div>

//           <p className="text-gray-600 mb-6">{product.description}</p>

//           <div className="mb-6">
//             <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
//               product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//             }`}>
//               {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//             </span>
//           </div>

//           {product.stock > 0 && (
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="flex items-center">
//                 <label className="mr-2 text-gray-700">Quantity:</label>
//                 <select
//                   value={quantity}
//                   onChange={(e) => setQuantity(parseInt(e.target.value))}
//                   className="border border-gray-300 rounded px-3 py-2"
//                 >
//                   {[...Array(Math.min(product.stock, 10))].map((_, i) => (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           )}

//           <div className="border-t pt-6">
//             <h3 className="text-lg font-semibold mb-2">Product Details</h3>
//             <p><strong>Category:</strong> {product.category?.name}</p>
//             <p><strong>SKU:</strong> {product.id}</p>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        
//         {!Array.isArray(reviews) || reviews.length === 0 ? (
//           <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
//         ) : (
//           <div className="space-y-6">
//             {reviews.map((review) => (
//               <div key={review.id} className="border-b pb-6">
//                 <div className="flex items-center mb-2">
//                   <div className="flex text-yellow-400">
//                     {'★'.repeat(review.rating)}
//                     {'☆'.repeat(5 - review.rating)}
//                   </div>
//                   <span className="ml-2 font-semibold">{review.title}</span>
//                 </div>
//                 <p className="text-gray-600 mb-2">{review.comment}</p>
//                 <p className="text-sm text-gray-500">
//                   By {review.user?.username} on {new Date(review.created_at).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;











// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PLACEHOLDER_IMAGE } from '../utils/constants';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/api/products/${id}/`);
      setProduct(response.data);
    } catch (error) {
      console.error('Failed to fetch product:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await api.get(`/api/products/${id}/reviews/`);
      
      let reviewsData = [];
      if (Array.isArray(response.data)) {
        reviewsData = response.data;
      } else if (response.data && Array.isArray(response.data.results)) {
        reviewsData = response.data.results;
      } else if (response.data) {
        reviewsData = [response.data];
      }
      
      setReviews(reviewsData);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      setReviews([]);
    }
  };

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }

    const result = await addToCart(product.id, quantity);
    if (result.success) {
      alert('Product added to cart!');
    } else {
      alert(result.error);
    }
  };

  const handleBuyNow = async () => {
    if (!isAuthenticated) {
      alert('Please login to purchase items');
      return;
    }

    const result = await addToCart(product.id, quantity);
    if (result.success) {
      navigate('/cart');
    } else {
      alert(result.error);
    }
  };

  const getImages = () => {
    if (!product) return [PLACEHOLDER_IMAGE];
    const images = [];
    if (product.image) images.push(product.image);
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach(img => images.push(img.image || img));
    }
    return images.length > 0 ? images : [PLACEHOLDER_IMAGE];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-3 border-indigo-200 border-t-indigo-600 mx-auto"></div>
          <p className="text-gray-500 mt-3 text-sm">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-500 text-sm mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const images = getImages();
  const discount = product.compare_price && product.compare_price > product.price 
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </button>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-3">
            {/* Main Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-80 object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = PLACEHOLDER_IMAGE;
                }}
              />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto py-1">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-16 h-16 border rounded-lg overflow-hidden transition-all ${
                      activeImage === index 
                        ? 'border-2 border-indigo-500 shadow-sm' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = PLACEHOLDER_IMAGE;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 text-base">
                  {'★'.repeat(Math.floor(product.average_rating || 0))}
                  {'☆'.repeat(5 - Math.floor(product.average_rating || 0))}
                </div>
                <span className="text-gray-500 text-sm ml-2">
                  ({product.review_count || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                {product.compare_price && product.compare_price > product.price && (
                  <>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ₹{product.compare_price}
                    </span>
                    <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                product.stock > 0 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  product.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}></span>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>

            {/* Add to Cart Section */}
            {product.stock > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                      className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-sm">−</span>
                    </button>
                    <span className="text-base font-medium w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => quantity < Math.min(product.stock, 10) && setQuantity(quantity + 1)}
                      disabled={quantity >= Math.min(product.stock, 10)}
                      className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-sm">+</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                  
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm shadow-sm"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            )}

            {/* Product Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
              <div className="space-y-2 text-sm">
                {product.category && (
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Category</span>
                    <span className="font-medium text-gray-900">{product.category.name}</span>
                  </div>
                )}
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">SKU</span>
                    <span className="font-medium text-gray-900">{product.id}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Availability</span>
                  <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h2>
            
            {!Array.isArray(reviews) || reviews.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1">No Reviews Yet</h3>
                <p className="text-gray-500 text-sm">Be the first to review this product!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="flex text-amber-400 text-base">
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                          </div>
                          <span className="ml-2 font-medium text-gray-900 text-sm">{review.title}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{review.comment}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>By {review.user?.username || 'Anonymous'}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(review.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;