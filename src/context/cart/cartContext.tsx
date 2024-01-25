import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [])

    const addToCart = (item: any) => {
        const isItemInCart = cartItems.find((cartItem: any) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem: any) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        console.log("cartItems",cartItems)
    };

    const removeFromCart = (item: any) => {
        const isItemInCart = cartItems.find((cartItem: any) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem: any) => cartItem.id !== item.id));
        } else {
        setCartItems(
            cartItems.map((cartItem: any) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
        );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
    };

    const getCartQty =() =>{
        return cartItems.reduce((qty:number,item:any)=>qty+item.quantity,0);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
        setCartItems(JSON.parse(cartItems));
        }
    }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};