import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../img/corcho.png";
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import "../css/cart.css";

const CartView = () => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, totalAmount } = useContext(CartContext);

  return (
    <Layout>
      <div className="cart">
        {productsAdded.length === 0 ? (
          <div className="emptyCart">
            <img src={EmptyCart} alt="Empty Cart" />
            <h1>No has agregado productos</h1>
            <button className="button" onClick={() => navigate("/")}>AGREGAR</button>
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
                <div className="cartCheck">
                  <span>Total a pagar: ${totalAmount}</span>
                  <button onClick={() => navigate("/")}>
                    Seguir Comprando
                  </button>
                  <button onClick={() => navigate("/checkout")}>
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
