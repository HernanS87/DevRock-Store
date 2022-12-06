import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import iconoCarrito from "../assets/statics/carrito.png";
import iconoVolver from "../assets/statics/volver.png";
import { Link } from "react-router-dom";
export default function Header() {
  const { contTotal } = useContext(Contexto);

  return (
    <header>
      <Link to="/carrito">
        <img src={iconoCarrito} alt="" className="carritou" />
        {contTotal > 0 && <p className="contador">{contTotal}</p>}
      </Link>
      <Link to="/">
        <img src={iconoVolver} alt="" className="volver" />
      </Link>
      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </header>
  );
}
