//ESTE ARCHIVO CONVINARA TODOS LOS REDUCER Q SE REALICEN Y ES EL QUE LEE EL STORE DEL PROVIDER Q ESTA EN EL APP.JS, ESTES ALGO ASI COMO EL INDICE

import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";

const reducer = combineReducers({
  contador: contadorReducer,
});

export default reducer;
