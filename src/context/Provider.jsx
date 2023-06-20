import React, { useState } from 'react';
import propTypes from 'prop-types';

import ShoppingContext from './ShoppingContext';

function Provider({ children }) {
  
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
  };

  return (
    <ShoppingContext.Provider value={ value }>
      {children}
    </ShoppingContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;


