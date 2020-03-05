import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist' // this does is allows our browser to actually cache our store now depending on certain configuration 


import rootReducer from './root-reducer';

// the middleware is that the store is expecting from redux is going to be an array const middleware = [logger]
const middleware = [logger]; // putting this function[logger], as an array // if we need to add more things to the middleware we can just add it to this array 


// create the store, = this function gets both rootReducer also return value of applyMiddleware. We will spread in all of the methods or all of the value in this array [logger] into (...middleware)
// persistStore we are exporting export const store
// technically don't need export here 
export const store = createStore(rootReducer, applyMiddleware(...middleware))
//
export const persistor = persistStore(store); // essentially a persisted version of our store 

export default { store, persistor }; // we are just going to return an object that gives store and persistor 
// now we need to update our rootReducer

// after we bring it to our index.js
