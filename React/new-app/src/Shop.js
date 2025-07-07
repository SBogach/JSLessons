import './Shop.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Cart from './Cart';
import React, { useState } from 'react'

function Shop() {
    const [currentScreen, setCurrentScreen] = useState('main');
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
               fetch("/api/products")
               .then((res) => res.json())
               .then((data) => setProducts(data));
    }, []);

    const onChangeCount = (id) => {
        setProducts(products.map(el => {if (el.id === id) {
                                               return {...el, count: 1};
                                             } else {
                                               return el;
                                             }
                                }));
    };

        const onDeleteProduct = (id) => {
            setProducts(products.filter(el => el.id !== id));
        }


  return (
  <>
    <Header />
    <button onClick={() => setCurrentScreen('main')}>Главная</button>
    <button onClick={() => setCurrentScreen('cart')}>Корзина</button>
    {currentScreen == 'main' && <MainContent prod={products} onChangeCount={onChangeCount}/>}
    {currentScreen == 'cart' && <Cart prod={products} onDelete={onDeleteProduct}/>}
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
