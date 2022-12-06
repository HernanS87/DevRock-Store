import React, { useContext } from "react";
import "../assets/css/Producto.css";
import Contexto from "../context/Contexto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Producto() {
  const { detalle, agregarCarrito } = useContext(Contexto);

  return (
    <>
      <div className="detalle">
        <img src={detalle.img} alt="" className="detalle-img" />
        <h1 className="home-item-titulo-detalle">{detalle.nombre}</h1>
        <p className="home-item-medidas-detalle">{detalle.medidas}</p>
        <div className="home-item-actions">
          <h3 className="home-item-precio">AR${detalle.precio}</h3>&nbsp;
          <button
            className="home-item-comprar"
            onClick={() => {
              agregarCarrito(detalle.id);
              toast.success(`Agregaste "${detalle.nombre}" al carrito`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            +
          </button>
        </div>
        <p>{detalle.descripcion}</p>
      </div>
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
