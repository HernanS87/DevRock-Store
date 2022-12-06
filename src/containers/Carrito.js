import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/Carrito.css";
import ItemCarrito from "../components/ItemCarrito";
import Contexto from "../context/Contexto";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Carrito() {
  const { carrito, totalPagar, resetearCarrito } = useContext(Contexto);

  const resetear = () => {
    resetearCarrito();
  }
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {carrito.length === 0 ? (
            <h1 className="listado-vacio">NO TIENES PRODUCTOS EN EL CARRITO</h1>
          ) : (
            carrito.map((item, i) => (
              <ItemCarrito {...item} key={i}></ItemCarrito>
            ))
          )}
        </div>

        <div className="carrito-precio">
          Total a pagar 
          <strong> AR$ {totalPagar}</strong>
        </div>
        <div className="btn-container">
          <Link to="/">
          <button className="btn-comprar" onClick={resetear}>COMPRAR</button>
          </Link>
        </div>
      </div>
      <PayPalButtons style={{ layout: "horizontal" }} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
