import './Shop.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Cart from './Cart';
import React, { useState } from 'react'

function Shop() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortState, setSortState] = useState('0');
  const [categoryState, setCategoryState] = useState(0);
  const [searchState, setSearchState] = useState('');

  React.useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  React.useEffect(() => {
    setProducts(sorting(allProducts, sortState, categoryState, searchState))
  }, [allProducts, sortState, categoryState, searchState]);

  const categoryList = [{ "id": 0, "name": "Все категории", "description": null },
    ...(allProducts.map(el => el.category).filter((el, index, arr) => arr.findIndex(x => x.id === el.id) === index)),
  ];

  const sorting = (items, type, category, search) => {
    if (search !== '') {
      items = items.filter((el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

    if (category > 0) {
      items = items.filter((el) => el.category.id == category);
    }

    if (type == '2') {
      return items.sort((a, b) => b.price - a.price);
    } else if (type == '1') {
      return items.sort((a, b) => a.price - b.price);
    } else {
        return items;
    }
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
  };

  const onChangeCategory = (event) => {
    setCategoryState(event.currentTarget.value);
  };

  const onSearch = (event) => {
    setSearchState(event.currentTarget.value);
  };

  return (
    <>
      <Header />
      <div className='buttonsLayout'>
        <input className='search' id='search' name='search' placeholder="Введите название товара" onChange={onSearch}></input>
        <select className='categorySelect' id='caregorySelect' name='categorySelect' onChange={onChangeCategory}>
          {
            categoryList.map(el =>
              <option key={el.name} value={el.id}>{el.name}</option>
            )
          }
        </select>
        <select className='sortSelect' id='sortSelect' name='sortSelect' onChange={onChangeSort}>
          <option value='0'>По релевантности</option>
          <option value='1'>Сначала дороже</option>
          <option value='2'>Сначала дешевле</option>
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