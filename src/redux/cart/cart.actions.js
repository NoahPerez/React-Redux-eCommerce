import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


export const addItem = item => ({        // it will be a function that gets the item that we want to add to that array we just made 
    type: CartActionTypes.ADD_ITEM,       // What it will return is this new action type object, where the type is our action type 
    payload: item                           // payload can be anything that we want it to be in our case Item                

});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

