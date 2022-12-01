import React from "react";
import "./css/App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Layout } from "./components/Layout";
import { CartContextProvider } from './context/cartContext';


function App() {
  return (
    <CartContextProvider>
      <Layout>
        <ItemListContainer />
      </Layout>
    </CartContextProvider>
  );
}

export default App;
