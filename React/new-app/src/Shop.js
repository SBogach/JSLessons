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
               fetch("/products")
               .then((res) => res.json())
               .then((data) => setProducts(data));

    }, []);

    const onAddCount = (id) => {
        setProducts(products.map(el => {if (el.id === id) {
                                               return {...el, count: 1};
                                             } else {
                                               return el;
                                             }
                                }));
    };

    const onDeleteProduct = (id) => {
        setProducts(products.map(el => {if (el.id === id) {
                                               return {...el, count: 0};
                                             } else {
                                               return el;
                                             }
                                }));
    };

    const onChangeCount = (id, newCount) => {
        setProducts(products.map(el => {if (el.id === id) {
                                               return {...el, count: newCount};
                                             } else {
                                               return el;
                                             }
                                }));
    };


  return (
  <>
    <Header />
    <div className='buttonsLayout'>
      <button className="mainButton" onClick={() => setCurrentScreen('main')}>Главная</button>
      <button className="cartButton" onClick={() => setCurrentScreen('cart')}>Корзина</button>
    </div>
    {currentScreen == 'main' && <MainContent prod={products} onChangeCount={onAddCount}/>}
    {currentScreen == 'cart' && <Cart prod={products} onDelete={onDeleteProduct} onChange={onChangeCount}/>}
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
