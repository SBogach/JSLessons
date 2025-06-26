import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './Chat.css'

function Chat() {
    const [messages, setMessages] = React.useState([]);
    const [text, setText] = React.useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        render();
    }, [messages]);

    const onClick = (mess) => {
        if (inputRef.current.value === "") {
            setMessages(prev => [...prev, {text: "Пожалуйста, введите сообщение", sender: "Bot", time: new Date().getTime()}]);
        } else {
            setMessages(prev => [...prev, {text: mess, sender: "User", time: new Date().getTime()}]);
        }
        inputRef.current.value = "";
    }

    const render = () => {
    }

    return (
        <div className='layout'>
            <div className='chatBox'>
                {messages.map(el => (
                    <div className={el.sender} key={el.time}>
                        {el.text}
                    </div>
                ))}
            </div>
            <input id = "1" name = "input" ref={inputRef} className={'inputMess'}></input>
            <button onClick={() => onClick(inputRef?.current.value)} className={'sendButton'}>Отправить</button>
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

export default Chat;