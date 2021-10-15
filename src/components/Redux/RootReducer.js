import { combineReducers } from "redux";
import ShopReducer from './Shopping/ShoppingReducer';

const RootReducer = combineReducers({
    Shop: ShopReducer
});

export default RootReducer;