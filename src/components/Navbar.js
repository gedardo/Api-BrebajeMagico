import "../css/navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p>El Brebaje Magico🍷</p>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/category/Tinto">Tintos</Link>
          <Link to="/category/Blanco">Blancos</Link>
          <Link to="/category/Espumantes">Espumantes</Link>
          <Link to="/category/Rosado">Rosados</Link>
        </div>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
