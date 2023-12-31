import React, { useEffect, useContext } from 'react';

import './Products.css';

import fetchProducts from '../../api/fetchProducts';

import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

import ShoppingContext from '../../context/ShoppingContext';

function Products() {

  const {products, setProducts, loading, setLoading} = useContext(ShoppingContext);

  useEffect(() => {
    fetchProducts('').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return ( 

  /*
    
    --EXPRESSÃO TERNÁRIA

    (loading ? <Loading /> : <section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </section>)
    
    */

    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  );
}

export default Products;
