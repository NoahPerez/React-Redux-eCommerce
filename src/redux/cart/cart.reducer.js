import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: // this is a string we need to make an action type for it 
            return {
                ...state, // it will return a new object we spread everything in our state. We want all the properties that aren't changing 
                hidden: !state.hidden  // ! What ever boolean value is i want you convert it to opposite of it  
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,  // it will return a new object we spread everything in our state also want to update our cartItems so that now it will return a new array without any instance of that we`re trying to clear away 
                // we are going to call our existing carItems array that exists on our state right now state.cartItems
                // !== if the cartItem.id does not match 
                // action.payload.id is the item that we are trying to remove. then i want you you to keep it.
                // if it does match then i wan you to filter it out 
                // filter turn back anything that yields true inside the actual function as the return of the function 
                // filter give us back a new array 
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default cartReducer;