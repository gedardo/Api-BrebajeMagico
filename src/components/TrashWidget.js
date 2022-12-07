import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import borrar from "../img/borrar.png"


export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="absolute flex justify-center items-center -top-2 -right-2 w-8 h-8 bg-red-200 rounded-full"
    >
<img src={borrar} className="logo" alt="logo" />
    </button>
  );
};