import avatar from './avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
        <img className="avatar" src={avatar} alt="logo"></img>
        <h2>Богач Сергей</h2>
        <p>Фронтенд-разработчик</p>
    </div>
  );
}

export default App;
