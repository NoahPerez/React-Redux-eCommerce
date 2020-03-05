import React from 'react';
import { Route } from 'react-router-dom'


import CollectionsOverview from '../../components/collection-overview/collections-overview.component'

import CollectionPage from '../collection/collection.component';

// Nesting 
// we have access to our match because we have inside our app.js // because ShopPage is nested in a Route <Route path='/shop' component={ShopPage} /> 
// Route automatically passes those  3 object in to our component as props we have match location and history 
// we want match because we want to display 

// <Route path={`${match.path}/:categoryId`} /> what is does it allow us access this category ID as a parameter on the match object when we're inside of our category 
const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)


export default ShopPage;