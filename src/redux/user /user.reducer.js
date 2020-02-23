const INITIAL_STATE = {  // this will represent the initial state of this reducer 
    currentUser: null
}

// default parameter value it is ES6 for function. If state is not undefined meaning that it`s not set then it will fall back and leverage the INITIAL STATE value.
// but remember null is consider  a value 
// Every single reducer gets every single action that ever get fired 
const userReducer = (state = INITIAL_STATE, action) => { // it is function that get a state and a action
    switch (action.type) {  // set up a case statement // base on the action dot type witch it is a string 
        case 'SET_CURRENT_USER': // this is the one we are interested about // when ever get`s fired 
            return {  // we want to return a new object which represent the new state that our userReducer is going to transform into 
                ...state,// it will be everything else in the state, We always want to spread in everything on the state right because we only want to modify the values that we care about.
                currentUser: action.payload // the one that we care about is currentUser // with the payload we are currently setting the current value 
            }
        default:
            return state; // if none of the action types match inside the switch statement that we care about, We just want to return the state 
    }
}

export default userReducer; // after we will bring this to our root-reducer 

// in order to make the action trigger the correct case inside of our switch statement. We need to create action creator functions 
