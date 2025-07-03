import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

function ProductInCart( {id, image, name, count, onDel, onChangeCount} ) {

    const onDelete = () => {
        onDel(id);
    }

    const onChange = (id, count) => {
        onChangeCount(id, count);
    }

    return (
        <tr>
            <td><img className="image" src={image}></img></td>
            <td>{name}</td>
            <td><Counter val={count} onChange={onChange}/></td>
            <td><button onClick={onDelete}>X</button></td>
        </tr>
    );
}

export default ProductInCart;