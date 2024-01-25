import React from 'react';
import {useContext } from 'react';
import { CartContext } from '../../../context/cart/cartContext';

export  function Cart() {
    const {cartItems,getCartTotal,removeFromCart,addToCart,getCartQty } = useContext<any>(CartContext);

  return (
    <>
    <table>
        <thead>
            <tr>
                <th colSpan={2}>Your Product </th>
                <th colSpan={2}>Total=${getCartTotal()}</th>
                <th colSpan={2}>Qty={getCartQty()}</th>
            </tr>
            <tr>
                <th>Id</th>
                <th>ProductName</th>
                <th>price</th>
                <th>Remove</th>
                <th>Qty</th>
                <th>Add</th>  
                <th>Item Total</th>
                
            </tr>
        </thead>
        <tbody>
            {
                cartItems.map((item:any)=>{
                    return (<>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td><button onClick={()=>{removeFromCart(item)}}>-</button></td>
                        <td>{item.quantity}</td>
                        <td><button onClick={()=>{addToCart(item)}}>+</button></td>
                        <td>${item.price*item.quantity}</td>
                    </tr>
                    </>)
                })
            }

        </tbody>
    </table>
    <div>cart</div> 
    </>
   
  )
}
