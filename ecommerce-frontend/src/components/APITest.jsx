// src/components/APITest.jsx (temporary - remove after debugging)
import React, { useEffect } from 'react';
import api from '../services/api';

const APITest = () => {
  useEffect(() => {
    const testEndpoints = async () => {
      try {
        console.log('Testing API endpoints...');
        
        // Test categories endpoint
        const categoriesResponse = await api.get('/api/categories/');
        console.log('Categories response:', categoriesResponse.data);
        
        // Test products endpoint
        const productsResponse = await api.get('/api/products/');
        console.log('Products response:', productsResponse.data);
        
      } catch (error) {
        console.error('API test failed:', error);
      }
    };

    testEndpoints();
  }, []);

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400">
      <h3 className="font-bold">API Debug Info (check console)</h3>
      <p>Testing API connections...</p>
    </div>
  );
};

export default APITest;