import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { HeaderComponet } from './components/headerComponet/headerComponet';
import { FooterComponet } from './components/footerComponet/footerComponet';
import { BrowserRouter } from 'react-router-dom';
import { RouteOutletComponent } from './components/routeOutletComponent/routeOutletComponent';
import { CartProvider } from './context/cart/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <HeaderComponet></HeaderComponet>
          <RouteOutletComponent></RouteOutletComponent>
        </BrowserRouter>
        <FooterComponet></FooterComponet>
      </CartProvider>
    </div>
  );
}

export default App;
