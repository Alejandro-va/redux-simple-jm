import { createStore } from "redux";
import reducer from "../reducers"; //import index de la carpeta reducers

const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;
