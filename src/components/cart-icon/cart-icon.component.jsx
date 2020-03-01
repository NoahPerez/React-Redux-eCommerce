import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// this is the state
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'>{itemCount}</span>
    </div>

)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// mapStateToProps we taking a slice of state to props 
// what we just wrote is a reselector 
// mapStateToProps we are computing out a new value based off of the state
// reduce is always returning a new value because reduce doesn't know the carItems might be the exact same.
// because our state is always a new object which means that everything even if the value is identical the object of our total state is a brand new object which means everything inside of it all the date inside of it is brand new => 
// and that's why every time  reduce gets called.

// We don't want to render our component it bad for perforce 
// to fix this we will use memorization (library re-selector) which si the caching of the selectors value, 
// re-selector so if the carItem value don't actually change right and if the output of the selector doesn't change we don't want to re-render our component. 
//


// that gets a state as in the whole state object and then pulls off a small portion or a slice of that state
// mapStateToProps keeps on firing.

// ItemCount & creative naming 

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity, 0
//     )
// });   // then we pass in as the  prop (item) to our component


// const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// });

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);