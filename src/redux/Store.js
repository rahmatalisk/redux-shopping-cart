import { createStore } from "redux";
import shoppingCartReducer from "./ShoppingCart/Reducer";



const store = createStore(shoppingCartReducer);


export default store;