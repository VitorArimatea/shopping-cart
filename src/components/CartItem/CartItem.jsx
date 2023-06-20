import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { BsCartXFill } from 'react-icons/bs';

import './CartItem.css';

import formatCurrency from '../../utils/formatCurrency';
import ShoppingContext from '../../context/ShoppingContext';

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(ShoppingContext);
  const { id, title, thumbnail, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="Imagem do produto" 
        className="cart-item-image" 
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button" 
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;

