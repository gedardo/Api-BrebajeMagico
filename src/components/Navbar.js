import "../css/navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="navbar">
      <p>El Brebaje Magico🍷</p>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <Link to="/Home">Home</Link>
          <Link to="/category/tinto">Tintos</Link>
          <Link to="/category/blanco">Blancos</Link>
          <Link to="/category/espumantes">Espumantes</Link>
          <Link to="/category/rosado">Rosados</Link>
        </div>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
