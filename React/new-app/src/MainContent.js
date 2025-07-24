import React from 'react';
import ReactDOM from 'react-dom/client';
import avatar from './avatar.jpg';
import './MainContent.css';
import Product from './Product';

function MainContent ( {onChangeCount, prod} ) {
    const [products, setProducts] = React.useState([]);

    const onChange = (id) => {
        onChangeCount(id);
    }

    React.useEffect(() => {
         setProducts(prod);
    }, [prod]);

  return (
  <div className="productList">
    {(products ?? []).map(el => (
        <div key={el.id} className="container">
            <Product key={el.id} props={el} onChangeCount={ onChange } count={prod.count}/>
        </div>
    ))}
  </div>
  );
}

export default MainContent;