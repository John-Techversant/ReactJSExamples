import { combineReducers } from "redux";

import cartReducer from "./cart";
import products from "./products";

export default combineReducers({
    cartProducts:cartReducer,
    products:products,
})