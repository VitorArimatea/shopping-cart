import React from 'react';

import Header from './components/Header/Header';
import Products from './components/Products/Products';

import Provider from './context/Provider';

function App() {
  return (
    <Provider> 
      <Header />
      <Products />    
    </Provider>
  );
}

export default App;
