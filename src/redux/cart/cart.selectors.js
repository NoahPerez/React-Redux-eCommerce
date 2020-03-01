import { createSelector } from 'reselect';
// we use Reselect to not make re re render our component 

// in Reselect we usually only take a part of state, that is the cart
const selectCart = state => state.cart;      //input selector, We only a slice of the state cart


// selectCartItems witch it is a cart in our property 
//createSelector is going to take two arguments 1st argument it's an array of input selectors

// now this is a Memorization selector 
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems                                         // 2nd will be a function that will return the value we want out of the selector
    //and what we're going to get in its parameters is actually each output o the input selector in the  array but in the order that selector were written 
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(           //
    [selectCartItems],
    cartItems =>                                          //
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,      // this will give us back the total quantity of the cartItems 
            0
        )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>                                          //
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,      // this will give us back the total quantity of the cartItems 
            0
        )
);