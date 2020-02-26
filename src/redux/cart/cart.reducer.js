import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: // this is a string we need to make an action type for it 
            return {
                ...state,
                hidden: !state.hidden  // ! What ever boolean value is i want you convert it to opposite of it  
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;