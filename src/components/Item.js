import { useNavigate } from "react-router-dom";
import "../css/card.css";
import { useGetItemImg } from "./useGetItemImg";

const Item = ({ product }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(product.imagen);

  const description = product.crianza.slice(0, 30);
  const title = product.nombre.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (
    <div onClick={handleNavigate}>
      <div className="card">
        <img src={img} title={product.nombre} />
        <p title={title}>{title}</p>
        <p>{product.varietal}</p>
        <p>{description}</p>
        <h3>${product.precio}</h3>
        <span>Stock: {product.stock}</span>
        <button id={product.id}>AGREGAR</button>
      </div>
    </div>
  );
};

export default Item;
