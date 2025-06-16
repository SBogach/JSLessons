import React from 'react';
import ReactDOM from 'react-dom/client';
import avatar from './avatar.jpg';
import './MainContent.css';
import Product from './Product';

function MainContent() {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
         fetch("http://localhost:10800/api/products")
              .then((res) => res.json())
              .then((data) => setProducts(data));
    }, []);
  return (
    <div className="container">
        <Product props={products} />
    </div>
  );
}

export default MainContent;