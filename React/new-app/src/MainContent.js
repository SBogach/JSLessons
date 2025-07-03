import React from 'react';
import ReactDOM from 'react-dom/client';
import avatar from './avatar.jpg';
import './MainContent.css';
import Product from './Product';

function MainContent() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
         fetch("/api/products")
              .then((res) => res.json())
              .then((data) => setProducts(data));
    }, []);
    console.log(products);
  return (
  <div className="productList">
    {products.map(el => (
        <div key={el.id} className="container">
            <Product key={el.id} props={el} />
        </div>
    ))}
  </div>
  );
}

export default MainContent;

//Надо     <div className="container">
//               <Product props={products} />
//           </div>
//создавать в products.map(..., чтобы их создавалось несколько. А внутри Product уже разбирались свойства.