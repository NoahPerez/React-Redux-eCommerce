import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // higher order component that let us modify our component to have access to things related to redux.
// higher order components are just functions that take components as arguments and then return you a new souped up component.

import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


// currentUser is coming form App.js at <Header currentUser={this.state.currentUser} /> 
const Header = ({ currentUser, hidden }) => (  // we modified our header component to be receiving the current user value form our reducer // We also need to modify our App.js
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                SHOP
        </Link>
            <Link className='option' to='/contact'>
                CONTACT
      </Link>

            {
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                        <Link className='option' to='/signIn'>
                            SIGN IN
          </Link>
                    )}

            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />  //if hidden is true i don't want to render nothing but if it`s not then render 
        }

    </div>
)



// we write mapStateProps = to a function that function will be an object where the name of the property will be the actual property want to pass in and then value will
// the is state the root.reducer
// we want to pass in a currentUser property, Where the value of it state.user.currentUser



const mapStateToProps = createStructuredSelector({ // this will  
    currentUser: selectCurrentUser,                 // the properties that we want points to the current selector 
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header); // now we are getting null value as current user being passed in  as current user.

// as connect is a higher order component we are going to pass it two components the second one optional 

// the first function that we will allow us to access the state with the state being our root.reducer