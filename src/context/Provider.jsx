import React, { useState } from 'react';
import propTypes from 'prop-types';

import ShoppingContext from './ShoppingContext';

function Provider({ children }) {
  
  const [products, setProducts] = useState([]);
  
  const value = {
    products,
    setProducts
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


