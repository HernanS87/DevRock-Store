import axios from "axios";
import Contexto from "./Contexto";
import { useEffect, useReducer } from "react";
import Reducer from "./Reducer";

export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: JSON.parse(localStorage.getItem("carrito")) || [],
    contTotal: 0,
    detalle: {},
    totalPagar: 0,
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);
  const listameProductos = async () => {
    const res = await axios(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    dispatch({ type: "LISTAME_PRODUCTOS", payload: res.data });
  };

  const agregarCarrito = (id) => {
    if (state.carrito.find((item) => item.id === id)) {
      state.carrito.map((items, p) => {
        if (items.id === id) {
          let pos = p;
          let cant = state.carrito[pos].cantidad + 1;
          state.carrito[pos].cantidad = cant;
          dispatch({ type: "AGREGAR_REPETIDO" });
        }
      });
    } else {
      dispatch({ type: "AGREGAR_CARRITO", payload: id });
    }
  };

  const mostrarDetalle = (item) => {
    dispatch({ type: "MOSTRAR_DETALLE", payload: item });
  };

  const eliminarCarrito = (item) => {
    dispatch({ type: "ELIMINAR_CARRITO", payload: item });
  };

  const contador = () => {
    dispatch({ type: "CONTADOR" });
  };

  const calcularTotal = () => {
    let accu = 0;
    state.carrito.forEach((item) => (accu += item.cantidad * item.precio));
    dispatch({ type: "CALCULAR_TOTAL", payload: accu });
  };

  const resetearCarrito = () => {
    dispatch({ type: "RESETEAR_CARRITO" });
  };

  useEffect(() => {
    contador();
    calcularTotal();
    localStorage.setItem("carrito", JSON.stringify(state.carrito));
  }, [state.carrito]);

  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        contTotal: state.contTotal,
        detalle: state.detalle,
        totalPagar: state.totalPagar,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
        mostrarDetalle,
        resetearCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
