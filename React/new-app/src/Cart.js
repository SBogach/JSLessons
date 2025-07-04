import React from 'react';
import ReactDOM from 'react-dom/client';
import avatar from './avatar.jpg';
import './Cart.css';
import Product from './Product';
import ProductInCart from './ProductInCart';

function Cart () {
    const [products, setProducts] = React.useState([]);
    const [productCount, setProductCount] = React.useState([]);

    const onDeleteProduct = (id) => {
        setProducts(products.filter(el => el.id !== id));
    }

    const onChangeCount = (id, newCount) => {
        setProducts(products.map(el => {if (el.id === id) {
                                               return {...el, count: newCount};
                                             } else {
                                               return el;
                                             }
                                }));
    }

    React.useEffect(() => {
         fetch("/api/products")
              .then((res) => res.json())
              .then((data) => setProducts(data.map((item) => { return {...item, count: 1} })));
    }, []);

    console.log(products);
  return (
  <div>
    <h1>Выбранные товары:</h1>
    <table>
      <thead>
        <tr>
          <th>Изображение</th>
          <th>Наименование</th>
          <th>Количество</th>
        </tr>
      </thead>
      {products.map(el => (
      <tbody key = {el.id}>
          <ProductInCart id = {el.id} image = {el.images[0].imageUrl} name={el.name} count={el.count} onDel={onDeleteProduct} onChangeCount={onChangeCount}/>
          <tr></tr>
      </tbody>
      ))}
    </table>
    <button>Сделать заказ</button>
  </div>
  );
}

export default Cart;