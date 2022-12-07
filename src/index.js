import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB21iaU-ZcUAc4cBOR2C_2dbtmG97W4_rw",
  authDomain: "brebaje-magico.firebaseapp.com",
  projectId: "brebaje-magico",
  storageBucket: "brebaje-magico.appspot.com",
  messagingSenderId: "585943384596",
  appId: "1:585943384596:web:ce0b7d148eb884bbc21d01"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
