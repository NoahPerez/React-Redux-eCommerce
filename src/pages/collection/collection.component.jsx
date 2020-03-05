import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';


const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

// need to use the second  optional parameter in map states of props the 1st is the state which is our overall reduce state form the top 
// second argument called OwnProps witch is the props of the component that we're wrapping 
// return object => where the collection will go to our selectCollection and we will pass (ownProps.match.params.collectionId)
// because this is returning our create selector call pretty much returns as a function that takes the state and then runs though the selector flow shop.selector.js
// this is necessary because unlike other selector, this selector needs a part of the state depending on the URL parameter.
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
