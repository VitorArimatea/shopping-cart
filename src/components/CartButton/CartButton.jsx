import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import './CartButton.css';

function CartButton() {
  return ( 
    <button type="button" className="cart__button">
      <HiOutlineShoppingCart />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
