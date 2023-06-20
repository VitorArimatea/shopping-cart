import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

import fetchProducts from '../../api/fetchProducts';

import ShoppingContext from '../../context/ShoppingContext';

function SearchBar() {
  
  const { setProducts, setLoading } = useContext(ShoppingContext);
  const [searchValue, setSearchValue] = useState(''); 


  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar Produtos" 
        className="search__input" 
        onChange={ ({ target }) => setSearchValue(target.value) }
        required  
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
