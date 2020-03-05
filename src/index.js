import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react' // you can also use if for react native and electron 

import { store, persistor } from './redux/store'; // this is imported form store // in PersistGate we need to bring persistor 


import './index.css';
import App from './App';




ReactDOM.render(
    // provider is a component class that we get from react-redux// once passed the store object we'll be able to give that read store context to the rest of the application so we can dispatch actions to that store or we can actually pull values off of the store and into our components and it all comes from this Provides.
    // We Wrap our PersistGate now we pass into the persist gate the persistor that we wrote in our redux store
    // persistor will rehydrate the store 
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


