import * as actionTypes from './ShopingTypes';

const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: null,
}

const ShopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return{}
        case actionTypes.REMOVE_FROM_CART:
            return{}
        case actionTypes.ADJUST_QTY:
            return{}
        case actionTypes.LOAD_CURRENT_ITEM:
            return{}
        default:
            return state;
    }
}

export default ShopReducer;