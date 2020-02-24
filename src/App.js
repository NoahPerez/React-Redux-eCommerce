import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; // 1st Redirect the user not to the sign in
import { connect } from 'react-redux'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props; // deconstructing 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // this is connected to our firebase.utils.js // authenticated user 
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);  // we can back from our userReft

        userRef.onSnapshot(snapShot => {   // we going to get the snapShot data that is the object 
          setCurrentUser({  // this is form dispatch// with the value 
            id: snapShot.id, // we are still passing the object 
            ...snapShot.data() // whenever our snapShot comes in 
          });
        });
      }
      else {
        setCurrentUser(userAuth); // we just need what the object we want to update it with 
      }
    })
  }

  componentWillUnmount() {     /// this is stop component to continue mounting 
    this.unsubscribeFromAuth();
  }

  render() {  //render is JavaScript in location that determines what component to return
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact path='/signIn'
            render={() => this.props.currentUser ? (  // this will be a function that will determine based off of this.props.currentUser ? if it is present then what we want to render is our redirect component that we just imported.
              <Redirect to='/' />
            ) : (   //all it takes is that to property that tells it where we want them to redirect to and then if not :
                <SignInAndSignUpPage />
              )
            } // we render ignInAndSignUpPage
          />
        </Switch>
      </div>
    );
  }
}


// 2nd we will need the current user redux state
// now we are able to connect mapStateToProps
// so now we have access to this.props.currentUser
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

//2nd argument will be mapDispatchToProps which is a function that gets this dispatch property that will return an object 
//where the property name will be whatever prop we want to pass in dispatches. the new action that we are trying to pass witch is setCurrentUser
// we need to import that action import { setCurrentUser } from './redux/user /user.actions';
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // user goes to a function that gets the user object and then calls dispatch and what is dispatches is whatever you are passing me whatever object you're passing me is going to be an action object that im going to pass to every reducer 
  // so our action is a function that // so user.action.js is a function that gets the user but returns an action abject.
  // are just dispatching the object 

  // after we don't need the constructor anymore 
})





// 1st argument we can do is pass in null as the first argument because we don't need any state so props from our reducer 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
