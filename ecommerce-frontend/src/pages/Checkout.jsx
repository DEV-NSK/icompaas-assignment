// // src/pages/Checkout.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../services/api';
// import { useCart } from '../context/CartContext';

// const Checkout = () => {
//   const [formData, setFormData] = useState({
//     shipping_address: '',
//     billing_address: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     // Validate form data
//     if (!formData.shipping_address.trim()) {
//       setError('Shipping address is required');
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log('Creating order with data:', formData);
      
//       // Create order
//       const orderResponse = await api.post('/api/orders/', formData);
//       console.log('Order created:', orderResponse.data);
      
//       // Clear cart
//       await clearCart();

//       // Navigate to orders page
//       navigate('/orders', { 
//         state: { 
//           message: 'Order placed successfully!',
//           order: orderResponse.data
//         } 
//       });
//     } catch (error) {
//       console.error('Order creation failed:', error);
//       console.error('Error details:', error.response?.data);
      
//       let errorMessage = 'Failed to create order';
      
//       if (error.response?.data) {
//         // Handle different error response formats
//         if (typeof error.response.data === 'string') {
//           errorMessage = error.response.data;
//         } else if (error.response.data.error) {
//           errorMessage = error.response.data.error;
//         } else if (error.response.data.detail) {
//           errorMessage = error.response.data.detail;
//         } else if (typeof error.response.data === 'object') {
//           // Handle field-specific errors
//           const fieldErrors = Object.entries(error.response.data)
//             .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
//             .join('; ');
//           errorMessage = fieldErrors || 'Please check your input data';
//         }
//       }
      
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!cart || cart.items.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
//         <button
//           onClick={() => navigate('/products')}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Order Summary */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             {cart.items.map((item) => (
//               <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b">
//                 <div className="flex items-center">
//                   <img
//                     src={item.product.image || '/placeholder-image.jpg'}
//                     alt={item.product.name}
//                     className="w-16 h-16 object-cover rounded"
//                     onError={(e) => {
//                       e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjNmM2YzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIwLjM1ZW0iIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTIiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
//                     }}
//                   />
//                   <div className="ml-4">
//                     <h3 className="font-semibold">{item.product.name}</h3>
//                     <p className="text-gray-600">Qty: {item.quantity}</p>
//                   </div>
//                 </div>
//                 <span className="font-semibold">${item.total_price}</span>
//               </div>
//             ))}
            
//             <div className="flex justify-between items-center mt-4 pt-4 border-t">
//               <span className="text-lg font-semibold">Total:</span>
//               <span className="text-xl font-bold">${cart.total_price}</span>
//             </div>
//           </div>
//         </div>

//         {/* Checkout Form */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
//           <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipping_address">
//                 Shipping Address *
//               </label>
//               <textarea
//                 id="shipping_address"
//                 name="shipping_address"
//                 value={formData.shipping_address}
//                 onChange={handleChange}
//                 required
//                 rows="4"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Enter your complete shipping address (street, city, state, zip code, country)"
//               />
//               <p className="text-sm text-gray-500 mt-1">
//                 Please provide your complete shipping address including street, city, state, and zip code.
//               </p>
//             </div>

//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billing_address">
//                 Billing Address
//               </label>
//               <textarea
//                 id="billing_address"
//                 name="billing_address"
//                 value={formData.billing_address}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Enter your billing address (optional - if different from shipping)"
//               />
//               <p className="text-sm text-gray-500 mt-1">
//                 If different from shipping address. Leave blank to use shipping address.
//               </p>
//             </div>

//             <button
//               type="submit"
//               disabled={loading || !formData.shipping_address.trim()}
//               className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
//             >
//               {loading ? 'Placing Order...' : 'Place Order'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
















// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useCart } from '../context/CartContext';
import { PLACEHOLDER_IMAGE } from '../utils/constants';

const Checkout = () => {
  const [formData, setFormData] = useState({
    shipping_address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.shipping_address.trim()) {
      setError('Shipping address is required');
      setLoading(false);
      return;
    }

    try {
      console.log('Creating order with data:', formData);
      
      const orderResponse = await api.post('/api/orders/', formData);
      console.log('Order created:', orderResponse.data);
      
      await clearCart();

      navigate('/orders', { 
        state: { 
          message: 'Order placed successfully!',
          order: orderResponse.data
        } 
      });
    } catch (error) {
      console.error('Order creation failed:', error);
      console.error('Error details:', error.response?.data);
      
      let errorMessage = 'Failed to create order';
      
      if (error.response?.data) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        } else if (error.response.data.detail) {
          errorMessage = error.response.data.detail;
        } else if (typeof error.response.data === 'object') {
          const fieldErrors = Object.entries(error.response.data)
            .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
            .join('; ');
          errorMessage = fieldErrors || 'Please check your input data';
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Add some items to your cart before proceeding to checkout.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase with secure checkout</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.product.image || PLACEHOLDER_IMAGE}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = PLACEHOLDER_IMAGE;
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{item.total_price}</p>
                      <p className="text-gray-500 text-sm">₹{item.product.price} each</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{cart.total_price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                    <span className="text-gray-900">Total Amount</span>
                    <span className="text-gray-900">₹{cart.total_price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Shipping Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="shipping_address">
                    Delivery Address *
                  </label>
                  <textarea
                    id="shipping_address"
                    name="shipping_address"
                    value={formData.shipping_address}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Enter your complete delivery address:
Street address
City, State
Postal Code
Country"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Please provide your complete address for order delivery
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !formData.shipping_address.trim()}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Placing Order...
                    </div>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </form>

              {/* Security Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  256-bit SSL Secure Checkout
                </div>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your payment information is secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;