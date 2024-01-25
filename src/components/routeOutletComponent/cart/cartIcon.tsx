import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/cart/cartContext';
import {useContext } from 'react';

export default function CartIcon() {
  const navigate = useNavigate();
  const {getCartTotal } = useContext<any>(CartContext);
  const{getCartQty} = useContext<any>(CartContext);
  console.log("cart",getCartTotal);
  console.log("qty",getCartQty);

  const cart=()=>{
    navigate(`/cart`)
  }
  return (
    <div > 
      <div style={{display:'inline-flex'}}>
        <div>Total=${getCartTotal()}</div>
        <div>Qty={getCartQty()}</div> 
      </div>
      <div onClick={()=>cart()}>Cart</div>
    </div>
  )
}
