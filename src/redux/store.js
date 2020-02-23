import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


import rootReducer from './root-reducer';

// the middleware is that the store is expecting from redux is going to be an array const middleware = [logger]
const middleware = [logger]; // putting this function[logger], as an array // if we need to add more things to the middleware we can just add it to this array 


// create the store, = this function gets both rootReducer also return value of applyMiddleware. We will spread in all of the methods or all of the value in this array [logger] into (...middleware)
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;

// after we bring it to our index.js
