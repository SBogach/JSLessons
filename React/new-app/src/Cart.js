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
        setProducts(products.filter((el) => el.id !== id));
    }

    React.useEffect(() => {
         fetch("/api/products")
              .then((res) => res.json())
              .then((data) => setProducts(data.map((item) => { return {...item, count: 1} })));
    }, []);
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
      <tbody>
        {products.map(el => (
          <ProductInCart id = {el.id} image = {el.images[0].imageUrl} name={el.name} count={el.count} onDel={onDeleteProduct}/>
        ))}
        <tr><button>Сделать заказ</button></tr>
      </tbody>
    </table>
  </div>
  );
}

export default Cart;