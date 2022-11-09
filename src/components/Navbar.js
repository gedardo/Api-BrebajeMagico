import '../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
        <div className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Empresa</a></li>
          <li><a href="/">Productos</a></li>
          <li><a href="/">Envíos</a></li>
          <li><a href="/">Contacto</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;