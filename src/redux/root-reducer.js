/* eslint-disable no-undef */
// root reducer represents the overall reducer based on all of the reduces that it pulls in. In order ofr us to combine them all together
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']  // this contain the string name of any reducer that we want to store// this is what we want to presist
}

// we need to wrap this in our persistReducer call
// this will be our root 
const rootReducer = combineReducers({
    user: userReducer,  //user is a property that points to userReducer  // We are then pulling that into this combined reducer which will return it into one giant object is appropriately bound with all the redux functionally that we want  
    // user is handle by firebase authentication. //user: is that represent the individual slice of state
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer // it point out to our shopReducer
});

// as a function passing both our persistConfig as well rootReducer 
// this will return back out of this function const persistConfig and const rootReducer now it a modified rootReducer
export default persistReducer(persistConfig, rootReducer);

