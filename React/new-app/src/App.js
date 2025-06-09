import avatar from './avatar.jpg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="container">
        <img className="avatar" src={avatar} alt="logo"></img>
        <h2>Богач Сергей</h2>
        <p>Фронтенд-разработчик</p>
    </div>
  );
}

function App2() {
    const age = 11;
    let text = age >= 18 ? "Вы взрослый" : "Вы малютка";
    return <div>
        <p>{text}</p>
    </div>;
}

function App3() {
    const isAuth = true;
    if (isAuth) {
        return <div>
            <p>Вы авторизованы</p>
        </div>;
    } else {
        return <div>
            <p>Пожалуйста, авторизуйтесь</p>
        </div>;
    }
}

function App4() {
    function getDigitsSum(number) {
        let strNumber = String(number);
        let sum = 0;
        for (let i = 0; i < strNumber.length; i++) {
            sum += Number(strNumber[i]);
        }
        alert(sum);
    }
    return <div>
        <button onClick={() => getDigitsSum(123)}>Butt 123</button>
        <button onClick={() => getDigitsSum(12345)}>Butt 12345</button>
    </div>;
}

function App5() {
    function click(number) {
        alert(number);
    }
    return <div>
        <button onClick={() => click(1)}>Butt 1</button>
        <button onClick={() => click(2)}>Butt 2</button>
        <button onClick={() => click(3)}>Butt 3</button>
    </div>;
}

function App6() {
    function click(event) {
        console.log(event.target);
    }
    return <div>
        <button onClick={event => click(event)}>Butt 1</button>
    </div>;
}

function App7() {
    let res = [];

    for (let i = 1; i <= 5; i++) {
        res.push(<li key={i}>{i}</li>);
    }

    return <ul>
        {res}
    </ul>;
}

function App8() {
    const users = [
        {name: 'user1', surn: 'surn1', age: 30},
        {name: 'user2', surn: 'surn2', age: 31},
        {name: 'user3', surn: 'surn3', age: 32}
    ];

    const res = users.map(function(item, index) {
        return <p key={index}>
            <span>{item.name} </span>
            <span>{item.surn} </span>
            <span>{item.age}</span>
        </p>;
    });

    return <div>
        {res}
    </div>;
}

function App9() {
    const users = [
        {name: 'user1', surn: 'surn1', age: 30},
        {name: 'user2', surn: 'surn2', age: 31},
        {name: 'user3', surn: 'surn3', age: 32}
    ];

    return <div>
        <User props={users} />
    </div>;
}

export default App9;
