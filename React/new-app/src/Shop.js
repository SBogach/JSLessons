import './Shop.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Cart from './Cart';
import React, { useState } from 'react'

function Shop() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [products, setProducts] = useState([]);
  const [sortState, setSortState] = useState('1');

  React.useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setProducts(sorting(data, sortState).reverse()));
  }, []);

  React.useEffect(() => {
    setProducts(prevState => sorting(prevState, sortState));
  }, [sortState]);

  const sorting = (arr, type) => {
    if (type === '2') {
      console.log(arr);
      return arr.sort((a, b) => b.price - a.price);
    } else {
      console.log(arr);
      return arr.sort((a, b) => a.price - b.price);
    }
    // if (type === 'Asc') {
    //   console.log(arr);
    //   return arr.sort((a, b) => a.price - b.price);
    // } else {
    //   console.log(arr);
    //   return arr.sort((a, b) => b.price - a.price);
    // }
  }

  const onAddCount = (id) => {
    setProducts(products.map(el => {
      if (el.id === id) {
        return { ...el, count: 1 };
      } else {
        return el;
      }
    }));
  };

  const onDeleteProduct = (id) => {
    setProducts(products.map(el => {
      if (el.id === id) {
        return { ...el, count: 0 };
      } else {
        return el;
      }
    }));
  };

  const onChangeCount = (id, newCount) => {
    setProducts(products.map(el => {
      if (el.id === id) {
        return { ...el, count: newCount };
      } else {
        return el;
      }
    }));
  };

  const onChangeSort = (event) => {
    setSortState(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onChangeCategory = (id, newCount) => {
    setProducts(products.map(el => {
      if (el.id === id) {
        return { ...el, count: newCount };
      } else {
        return el;
      }
    }));
  };

  const categoryList = [{ "id": 0, "name": "Все категории", "description": null },
                        ...(products.map(el => el.category)
                                    .filter((el, index, arr) => arr.findIndex(x => x.id === el.id) === index)),
  ];


    return (
    <>
      <Header />
      <div className='buttonsLayout'>
        <select className='categorySelect' id='caregorySelect' name='categorySelect' onChange={onChangeCategory}>
          {
            categoryList.map(el =>
              <option key={el.name} value={el.id}>{el.name}</option>
            )
          }
        </select>
        <select className='sortSelect' id='sortSelect' name='sortSelect' onChange={onChangeSort}>
          <option value="1">Сначала дороже</option>
          <option value="2">Сначала дешевле</option>
        </select>
        <button className="cartButton" onClick={() => setCurrentScreen('cart')}>Корзина</button>
        <button className="mainButton" onClick={() => setCurrentScreen('main')}>Главная</button>
      </div>
      {currentScreen === 'main' && <MainContent prod={products} onChangeCount={onAddCount} />}
      {currentScreen === 'cart' && <Cart prod={products} onDelete={onDeleteProduct} onChange={onChangeCount} />}
      <Footer />
    </>
    );
  };


export default Shop;
// Сделать сортировку по цене
// Сделать поиск