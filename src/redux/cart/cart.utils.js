// grouping the cart items to our cart reducer 
// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location 


// function called addItemCart that is going to take two argument, the first is all the existing cartItems that are in our cartItems array right now.
// the second one is cart items that we want to add 
// Where are going to look in our exiting Cart items to see if that cart item already exits.
// Find will find is true and cart items defined well return you the first item found in our array.
// find , we get each individual cartItem => and we'll check the cartItem.id if it matches the cartItemToAdd.id 
// if it matches it will set that cart item where this condition is true to our const existingCartIte, if it doesn't find anything after looping all of it it will be undefined 



export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id  // 
    );

    if (existingCartItem) {  // if exiting cart item exist then what we're going to return from our entire function is our carItem  
        return cartItems.map(cartItem => // because map will return us a new array, Because we need to return new versions of our state so that our components know to re render properly
            cartItem.id === cartItemToAdd.id // 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } //then we will create a new object where we have the cart item expect the quantity 
                : cartItem  // if that cartItem  doesn't match we don't need to update any components, we just want to return the original cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    //  if we don't find the cartItem that is not in array return a new array with all our existing cartItems original, 
    //but we also want to now add in a object which is equal to our cartItemToAdd (argument) expect we're gonna give it a base quantity of one.
    // quantity if 
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {  // if we have the existingCartItem is equal to one then we want to filter it out 
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)  // filter keep the values where the function return true, If cartItem.id are not equal to cartItemToRemove.id  don't want to remove if it`s  i do 
        // filter we just want to remove it and we want to keep all the ones where the cart items I.D don't match the one we're trying to remove because that's what is filter needs to say return carItems to filter where 
    }
    // alternatively if the quantity is not 1 and we know there is and exiting cart item because there must 
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? // If it is the same one  
            { ...cartItem, quantity: cartItem.quantity - 1 } // then we want to decrease the quantity we're going to turn a new object spread in the cartItems, except we want the quantity to go to cartItem.quantity minus 1
            : cartItem  // otherwise what we want is to return just the cartItem 
    )

}

