import logo from "../images/logo.svg";
import "../App.css";

const NavBar = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width={100} />
      <p>SELENE AI </p>
      <a
        className="App-link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
       
      </a>
    </header>
  );
}

export default NavBar;
