import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import "../css/card.css";
import { CartContext } from "../context/cartContext";
import { useGetItemImg } from "./useGetItemImg";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.imagen);

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
    addItem (item, count);
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="description-block">
      <div>
        <img src={img} alt={item.nombre} />
      </div>

      <div className="detail">
        <h2>
          {item.nombre} - {item.categoria} - {item.varietal}
        </h2>
        <h3>Crianza: {item.crianza}</h3>
        <p>{item.notas}</p>
        <h4>
          Precio: <strong>${item.precio}</strong>
        </h4>
        {currentStock > 0 && <p>En Stock: {currentStock}</p>}

        <div className="addCart">
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div>
            <button onClick={handleAdd} disabled={currentStock === 0}>
              Agregar al carrito
            </button>
            <button disabled={!isInCart(item.id)} onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
