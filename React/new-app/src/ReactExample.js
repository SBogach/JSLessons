import React from 'react';
import { useEffect, useState, useRef } from 'react';

function AppButton() {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        console.log('Значение count: ', value);
    }, [value]);

    return (
        <div>
            <button onClick={() => setValue(value+1)}>+</button>
            {value}
            <button onClick={() => setValue(value-1)}>-</button>
        </div>
    );
//    const inputRef = useRef(null);
//
//    return (
//    <div>
//        <input ref={inputRef}></input>
//        <button onClick={() => inputRef?.current?.focus()}>I am button</button>
//    </div>
//    );
}

export default AppButton;