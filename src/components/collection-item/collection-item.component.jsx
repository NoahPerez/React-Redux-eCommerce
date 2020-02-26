import React from 'react'
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item  // we want to destructor them form the item 

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
}
//inverted is a key to inverted the colour of our button 



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps,
)(CollectionItem);