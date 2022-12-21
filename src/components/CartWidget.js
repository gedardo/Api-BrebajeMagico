import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import "../css/navbar.css";
import logo from "../img/cart.png";

function CarWidget() {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded.length;
  return (
    <div>
      
      <Link to="/cart">
        <img src={logo} className="logo" alt="logo" />
        {count > 0 && <span className="logo">{count}</span>}
      </Link>
    </div>
  );
}

export default CarWidget;
