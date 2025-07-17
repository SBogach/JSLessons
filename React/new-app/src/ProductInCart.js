import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import './ProductInCart.css'

function ProductInCart( {id, image, name, count, onDel, onChangeCount} ) {

    const onDelete = () => {
        onDel(id);
    }

    const onChange = (count) => {
        onChangeCount(id, count);
    }

    return (
        <tr>
            <td style={{ textAlign: 'center'}}><img className="image" src={image}></img></td>
            <td style={{ width: '300px'}}>{name}</td>
            <td><Counter val={count} onChange={onChange}/></td>
            <td><button className='cancelButton' onClick={onDelete}>X</button></td>
        </tr>
    );
}

export default ProductInCart;