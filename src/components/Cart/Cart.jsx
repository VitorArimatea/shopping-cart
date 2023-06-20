import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

import ShoppingContext from '../../context/ShoppingContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const {cartItems, isCartVisible} = useContext(ShoppingContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>
      <div className="cart-resume">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  );
}

export default Cart;
