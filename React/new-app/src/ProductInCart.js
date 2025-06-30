import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

function ProductInCart( {id, image, name, count, onDel} ) {

    const onDelete = () => {
        onDel(id);
    }

    return (
        <tr>
            <td><img className="image" src={image}></img></td>
            <td>{name}</td>
            <td><Counter count={count} /></td>
            <td><button onClick={onDelete}>X</button></td>
        </tr>
    );
}

export default ProductInCart;