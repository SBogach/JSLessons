import './Shop.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Cart from './Cart';
import React, { useState } from 'react'

function Shop() {
    const [currentScreen, setCurrentScreen] = useState('main');
  return (
  <>
  <Header />
  <button onClick={() => setCurrentScreen('cart')}>Корзина</button>
  {currentScreen == 'main' && <MainContent />}
  {currentScreen == 'cart' && <Cart />}
  <Footer />
  </>
  );
}

export default Shop;
//
//function Shop() {
//  return (
//  <>
//  <Header />
//  <MainContent />
//  <Footer />
//  </>
//  );
//}
//
//export default Shop;
