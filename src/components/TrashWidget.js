import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import borrar from "../img/borrar.png";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button onClick={() => removeItem(itemId)}>
      <img src={borrar} className="btnClear" alt="logo" />
    </button>
  );
};
