import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import "../css/card.css"

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="description-block">
      {/* Item image */}
      <div>
        <img src={item.imagen} alt={item.nombre} />
      </div>

      {/* Item description */}
      <div className="detail">
        <h2>{item.nombre} - {item.category} - {item.varietal}</h2>
        <h3>Crianza: {item.crianza}</h3>
        <p>{item.notas}</p>
        <h4>
          Precio: <strong>${item.price}</strong>
        </h4>
        {currentStock > 0 && (
          <p>En Stock: {currentStock}</p>
        )}

        <div className="addCart">
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div>
            <button
              onClick={handleAdd}
              disabled={currentStock === 0}
            >
              Agregar al carrito
            </button>
            <button
              onClick={handleCheckout}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
