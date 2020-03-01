import React from 'react'
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss'

//this is one layer deep, we are pull off catItem off the props object and then pulling these values off of the cart { name, imageUrl, price, quantity }
//  We do not have access to const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
// what we need to do is an explicit return in this function and just make sure 
// onClick we we create a new anonymous function that will call our new clearItem function that we're passing in as a prop and we'll pass the cartItem in like so and now we have our clearItem working

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
        </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)) //item is out payload 
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
