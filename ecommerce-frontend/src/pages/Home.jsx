// // // src/pages/Home.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import api from '../services/api';
// // // import api from '../services/api-dev';
// // import ProductCard from '../components/ProductCard';

// // const Home = () => {
// //   const [featuredProducts, setFeaturedProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchFeaturedProducts();
// //   }, []);

// //   const fetchFeaturedProducts = async () => {
// //     try {
// //       // Remove 'limit' parameter as it's not supported by your backend
// //       // Use 'featured=true' and let Django handle pagination
// //       const response = await api.get('/api/products/?featured=true');
      
// //       console.log('Featured products response:', response.data);
      
// //       // Handle different response structures
// //       let productsData = [];
// //       if (Array.isArray(response.data)) {
// //         productsData = response.data;
// //       } else if (response.data && Array.isArray(response.data.results)) {
// //         productsData = response.data.results;
// //       } else if (response.data) {
// //         productsData = [response.data];
// //       }
      
// //       // Take only first 8 products for featured section
// //       const limitedProducts = productsData.slice(0, 8);
// //       setFeaturedProducts(limitedProducts);
// //     } catch (error) {
// //       console.error('Failed to fetch featured products:', error);
// //       setError('Failed to load featured products. Please try again later.');
// //       setFeaturedProducts([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Hero Section */}
// //       <section className="bg-blue-600 text-white py-20">
// //         <div className="text-center">
// //           <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
// //           <p className="text-xl mb-8">Discover amazing products at great prices</p>
// //           <Link
// //             to="/products"
// //             className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
// //           >
// //             Shop Now
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Featured Products */}
// //       <section className="py-12">
// //         <div className="text-center mb-8">
// //           <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
// //           <p className="text-gray-600 mt-2">Check out our most popular items</p>
// //         </div>

// //         {error && (
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
// //             {error}
// //           </div>
// //         )}

// //         {loading ? (
// //           <div className="flex justify-center">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {featuredProducts.map((product) => (
// //               <ProductCard key={product.id} product={product} />
// //             ))}
// //           </div>
// //         )}

// //         {featuredProducts.length === 0 && !loading && (
// //           <div className="text-center py-8">
// //             <p className="text-gray-500 mb-4">No featured products available.</p>
// //             <Link
// //               to="/products"
// //               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
// //             >
// //               Browse All Products
// //             </Link>
// //           </div>
// //         )}

// //         <div className="text-center mt-8">
// //           <Link
// //             to="/products"
// //             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
// //           >
// //             View All Products
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;
















// // src/pages/Home.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../services/api';
// import ProductCard from '../components/ProductCard';

// const Home = () => {
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchFeaturedProducts();
//   }, []);

//   const fetchFeaturedProducts = async () => {
//     try {
//       const response = await api.get('/api/products/?featured=true');
      
//       console.log('Featured products response:', response.data);
      
//       let productsData = [];
//       if (Array.isArray(response.data)) {
//         productsData = response.data;
//       } else if (response.data && Array.isArray(response.data.results)) {
//         productsData = response.data.results;
//       } else if (response.data) {
//         productsData = [response.data];
//       }
      
//       const limitedProducts = productsData.slice(0, 8);
//       setFeaturedProducts(limitedProducts);
//     } catch (error) {
//       console.error('Failed to fetch featured products:', error);
//       setError('Failed to load featured products. Please try again later.');
//       setFeaturedProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Enhanced Hero Section */}
//       <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             Welcome to Our 
//             <span className="block bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
//               Premium Store
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
//             Discover exceptional products curated just for you. Quality meets affordability in every purchase.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/products"
//               className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Start Shopping
//             </Link>
//             <Link
//               to="/about"
//               className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
        
//         {/* Decorative elements */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
//             <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
//             <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-gray-50"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Enhanced Featured Products Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full text-sm font-medium mb-4">
//               <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
//               Featured Collection
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Curated Excellence
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Handpicked selections that combine quality, style, and exceptional value for your everyday needs.
//             </p>
//           </div>

//           {/* Error State */}
//           {error && (
//             <div className="max-w-2xl mx-auto mb-8">
//               <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-red-700">{error}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Loading State */}
//           {loading ? (
//             <div className="flex justify-center items-center py-16">
//               <div className="relative">
//                 <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-sm text-gray-500">Loading...</span>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <>
//               {/* Products Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//                 {featuredProducts.map((product) => (
//                   <div 
//                     key={product.id} 
//                     className="transform hover:scale-105 transition-transform duration-300"
//                   >
//                     <ProductCard product={product} />
//                   </div>
//                 ))}
//               </div>

//               {/* Empty State */}
//               {featuredProducts.length === 0 && !loading && (
//                 <div className="text-center py-12">
//                   <div className="max-w-md mx-auto">
//                     <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
//                       <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">No Featured Products</h3>
//                     <p className="text-gray-600 mb-6">We're currently updating our featured collection. Check back soon for new arrivals!</p>
//                     <Link
//                       to="/products"
//                       className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                     >
//                       Browse All Products
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}

//           {/* CTA Section */}
//           {featuredProducts.length > 0 && (
//             <div className="text-center">
//               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-sm">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore More?</h3>
//                 <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//                   Discover our complete collection of premium products tailored to meet your every need.
//                 </p>
//                 <Link
//                   to="/products"
//                   className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Explore Full Catalog
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;











// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await api.get('/api/products/?featured=true');
      
      console.log('Featured products response:', response.data);
      
      let productsData = [];
      if (Array.isArray(response.data)) {
        productsData = response.data;
      } else if (response.data && Array.isArray(response.data.results)) {
        productsData = response.data.results;
      } else if (response.data) {
        productsData = [response.data];
      }
      
      const limitedProducts = productsData.slice(0, 8);
      setFeaturedProducts(limitedProducts);
    } catch (error) {
      console.error('Failed to fetch featured products:', error);
      setError('Failed to load featured products. Please try again later.');
      setFeaturedProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Hero Section with User Greeting */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* User Greeting */}
          {isAuthenticated && user && (
            <div className="mb-6 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/30">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg">
                  {user.name ? user.name.charAt(0).toUpperCase() : user.username.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <p className="text-amber-200 text-xs font-medium">{getGreeting()}</p>
                  <h3 className="text-base font-bold text-white">
                    Welcome back, {user.name || user.username}!
                  </h3>
                </div>
              </div>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {isAuthenticated ? 'Ready to Explore?' : 'Welcome to iCompaas'}
            <span className="block bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent text-2xl md:text-3xl mt-2">
              {isAuthenticated ? 'New Arrivals Await!' : 'Premium Store'}
            </span>
          </h1>
          
          <p className="text-base md:text-lg mb-6 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            {isAuthenticated 
              ? "Discover our latest curated collection tailored just for you."
              : "Discover exceptional products curated just for you. Quality meets affordability in every purchase."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/products"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Start Shopping
            </Link>
            
            {!isAuthenticated && (
              <Link
                to="/login"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Sign In
              </Link>
            )}
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-300 mb-1">500+</div>
              <div className="text-gray-200 text-xs">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-300 mb-1">10K+</div>
              <div className="text-gray-200 text-xs">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-300 mb-1">24/7</div>
              <div className="text-gray-200 text-xs">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-300 mb-1">100%</div>
              <div className="text-gray-200 text-xs">Quality Guarantee</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Featured Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
              {isAuthenticated ? 'Personal Picks for You' : 'Featured Collection'}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {isAuthenticated ? 'Your Exclusive Collection' : 'Curated Excellence'}
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {isAuthenticated 
                ? "Handpicked items we think you'll love based on your preferences."
                : "Handpicked selections that combine quality, style, and exceptional value."
              }
            </p>
          </div>

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto mb-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="animate-spin rounded-full h-12 w-12 border-3 border-indigo-200 border-t-indigo-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Loading...</span>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm">Discovering amazing products for you...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {featuredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {featuredProducts.length === 0 && !loading && (
                <div className="text-center py-8">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Featured Products</h3>
                    <p className="text-gray-600 text-sm mb-4">We're currently updating our featured collection. Check back soon for new arrivals!</p>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    >
                      Browse All Products
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}

          {/* CTA Section */}
          {featuredProducts.length > 0 && (
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 shadow-sm border border-indigo-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isAuthenticated ? 'Ready to Continue Shopping?' : 'Ready to Explore More?'}
                </h3>
                <p className="text-gray-600 text-sm mb-4 max-w-2xl mx-auto">
                  {isAuthenticated
                    ? "Discover our complete collection of premium products tailored to your taste."
                    : "Discover our complete collection of premium products tailored to meet your every need."
                  }
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Explore Full Catalog
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;