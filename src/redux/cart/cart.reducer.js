import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: // this is a string we need to make an action type for it 
            return {
                ...state,
                hidden: !state.hidden  // ! What ever boolean value is i want you convert it to opposite of it  
            }
        default:
            return state;
    }
}

export default cartReducer;