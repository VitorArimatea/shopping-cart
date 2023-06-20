import React, { useContext } from 'react';
import propTypes from 'prop-types';

import './ProductCard.css';

import formatCurrency from '../../utils/formatCurrency';
import ShoppingContext from '../../context/ShoppingContext';

function ProductCard({ data }) {

  const { price, title, thumbnail } = data;

  const { cartItems, setCartItems } = useContext(ShoppingContext);

  const handleAddCart = () => {setCartItems([ ...cartItems, data ]);};
  
  /* Outra forma de realizar essa mesma função, porém bem maior 
    const updatedCartItems = cartItems;

    updatedCartItems.push(data);

    setCartItems(updatedCartItems);
  */

  return (
    <section className="product-card">
      
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="Produto" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}
        </h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={handleAddCart}
      >
        Adicionar ao carrinho
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
