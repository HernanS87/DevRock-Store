import React, { useContext } from "react";
import "../assets/css/ItemCarrito.css";
import Borrar from "../assets/statics/borrar.png";
import Contexto from "../context/Contexto";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemCarrito({ nombre, precio, img, id, cantidad }) {
  const { eliminarCarrito } = useContext(Contexto);

  const handleBorrar = () => {
    toast.info(`Eliminaste "${nombre}" del carrito`, {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    eliminarCarrito(id);
  };
  return (
    <>
      <div className="carrito-item">
        <img src={img} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h3 className="carrito-item-precio">
            AR${precio} {cantidad > 1 && `x ${cantidad}`}
          </h3>
        </div>

        <img
          src={Borrar}
          alt=""
          className="carrito-item-borrar"
          onClick={handleBorrar}
        />
      </div>
    </>
  );
}
