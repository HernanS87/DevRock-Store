import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Item.css";
import Contexto from "../context/Contexto";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Item(props) {
  const { nombre, precio, medidas, img, id } = props;
  const { agregarCarrito, mostrarDetalle } = useContext(Contexto);

  const handleDetalle = () => {
    mostrarDetalle(props);
  };
  return (
    <>
      <div className="home-item">
        <Link to="/producto" className="home-item-a">
          <img
            src={img}
            alt=""
            onClick={handleDetalle}
            className="home-item-img"
          />
          <div className="home-item-info" onClick={handleDetalle}>
            <h1 className="home-item-titulo">{nombre}</h1>
            <p className="home-item-medidas">Medidas: {medidas}</p>
          </div>
        </Link>
        <div className="home-item-actions">
          <h3 className="home-item-precio">AR$ {precio}</h3>
          <button
            className="home-item-comprar"
            onClick={() => {
              agregarCarrito(id);
              toast.success(`Agregaste "${nombre}" al carrito`, {
                position: "bottom-center",
                autoClose: 4000,
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
      </div>
    </>
  );
}
