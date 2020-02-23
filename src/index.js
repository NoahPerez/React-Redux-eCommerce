import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'; // this is imported form store 

import './index.css';
import App from './App';




ReactDOM.render(
    // provider is a component class that we get from react-redux// once passed the store object we'll be able to give that read store context to the rest of the application so we can dispatch actions to that store or we can actually pull values off of the store and into our components and it all comes from this Provides.
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


