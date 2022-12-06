//TYPES

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const AGREGAR_REPETIDO = "AGREGAR_REPETIDO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";
const CONTADOR = "CONTADOR";
const MOSTRAR_DETALLE = "MOSTRAR_DETALLE";
const CALCULAR_TOTAL = "CALCULAR_TOTAL";
const RESETEAR_CARRITO = "RESETEAR_CARRITO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_PRODUCTOS:
      return { ...state, productos: payload };

    case AGREGAR_CARRITO:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          {
            ...state.productos.find((ite) => ite.id == parseInt(payload)),
            cantidad: 1,
          },
        ],
      };

    case AGREGAR_REPETIDO:
      return {
        ...state,
        carrito: [...state.carrito],
      };

    case MOSTRAR_DETALLE:
      return {
        ...state,
        detalle: { ...payload },
      };

    case ELIMINAR_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter((items) => items.id !== payload),
      };

    case RESETEAR_CARRITO:
      return {
        ...state,
        carrito: [],
      };

    case CONTADOR:
      return {
        ...state,
        contTotal: state.carrito.reduce(
          (acc, carrito) => acc + carrito.cantidad,
          0
        ),
      };

    case CALCULAR_TOTAL:
      return {
        ...state,
        totalPagar: payload,
      };
  }
}
