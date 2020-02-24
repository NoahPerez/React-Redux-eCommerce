// root reducer represents the overall reducer based on all of the reduces that it pulls in. In order ofr us to combine them all together
import { combineReducers } from 'redux';


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user: userReducer,  //user is a property that points to userReducer  // We are then pulling that into this combined reducer which will return it into one giant object is appropriately bound with all the redux functionally that we want  
    cart: cartReducer
});

//user: is that represent the individual slice of state