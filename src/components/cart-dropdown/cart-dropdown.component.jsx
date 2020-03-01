import React from 'react';
import { connect } from 'react-redux';   // to be able to connect cart-item.component to cart-dropdown.component we need to use connect 
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'; // withRouter is a higher component 

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">

            {cartItems.length ? ( // cartItem.length if it equal to 0  message Your cart is empty  
                cartItems.map(cartItem => (    //if is not falsy then we will render our cart items  //map going thought the array 
                    <CartItem key={cartItem.id} item={cartItem} /> // function that makes us able to display items 
                ))
            ) : ( // if there isn't any items then we will render a span with the class name of empty message
                    <span className='empty-message'> Your cart is empty </span>
                )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden()) // dispatch toggleCartHidden Shorthand  
        }} > GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


// we wil wrap our connected function inside of our withRouter
// the reason we can do this is because all of our higher order components if you remember return components but also take components as their arguments 
// withRouter is just taking the component that got returned form our connect call as it`s component
// the order in which we wrap them matters because with router will be what passes the match history and location at our withRouter component into the component that is being wrapped 
// So we want comes out of connect component to receive those props because when you wrap components 
// When you wrap components like this it actually evaluates from inside out so we will actually get our connected first,  witch will then pass in to our withRouter higher component 
// and this way our actual component will have access to the props that we're looking for which in this case is history 

export default withRouter(connect(mapStateToProps)(CartDropdown));
