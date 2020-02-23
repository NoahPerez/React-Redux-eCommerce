// actions are just functions that return objects

// we are going to fire off an action that holds that value user 
// and we are going to call it are user then what this function returns is an object where the type is 'SET_CURRENT_USER'
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',    //  this string that our reducer is expecting user.reducer.js // these string should never change 
    payload: user
});


// now we need to bring our currentUser value to header because right now our header component is getting the currentUser 


