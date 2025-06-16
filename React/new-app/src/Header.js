import './Header.css';
import logo from './logo.jpg';

function Header() {
  return (
    <>
    <header className="header">
        <img className="logo" src={logo} alt="logo"></img>
    </header>
    </>
  );
}

export default Header;