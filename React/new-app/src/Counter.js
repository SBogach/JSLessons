import React from 'react';
import ReactDOM from 'react-dom/client';

function Counter( props ) {
    const [count, setCount] = React.useState(props.count);

    const countPlus = () => {
        setCount(count + 1);
    }

    const countMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <button onClick={countMinus}>-</button>
            {count}
            <button onClick={countPlus}>+</button>
        </div>
    );
}

export default Counter;