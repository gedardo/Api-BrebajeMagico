import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../img/corcho.png";
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import "../css/cart.css"

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear, totalAmount } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div className="cart">
        {productsAdded.length === 0 ? (
          <div>
            <img src={EmptyCart} alt="Empty Cart" />
            <h1>No has agregado productos</h1>
            <button onClick={() => navigate("/")}>Ir al Inicio</button>
          </div>
        ) : (
          <div>
            <div className="cartContainer">
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div>
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div>
              {isLoading ? (
                <Loading size="50px" />
              ) : (
                <div>
                  <span>Total a pagar: ${totalAmount}</span>
                  <button onClick={handleFinalizePurchase}>
                    Finalizar Compra
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;
