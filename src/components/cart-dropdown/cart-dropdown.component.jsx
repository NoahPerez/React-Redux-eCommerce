import React from 'react';
import { connect } from 'react-redux';   // to be able to connect cart-item.component to cart-dropdown.component we need to use connect 

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (      //map going thought the array
                <CartItem key={cartItem.id} item={cartItem} /> // function that makes us able to display items 
            ))}
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})



export default connect(mapStateToProps)(CartDropdown);
