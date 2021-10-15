import * as actiontTypes from './ShopingTypes';

export const AddToCart = (itemID) => {
    return {
        type: actiontTypes.ADD_TO_CART,
        payload: {
            id: itemID
        },
    };
};


export const RemoveFromCart = (itemID) => {
    return {
        type: actiontTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        },
    };
};


export const AdjustQty = (itemID, value) => {
    return {
        type: actiontTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        },
    };
};


export const LoadCurrentItem = (item) => {
    return {
        type: actiontTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};