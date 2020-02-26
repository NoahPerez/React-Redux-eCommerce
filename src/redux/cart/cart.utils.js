// grouping the cart items to our cart reducer 
// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location 


// function called addItemCart that is going to take two argument, the first is all the existing cart Items that are in our cartItems array right now.
// the second one is cart items that we want to add 
// Where are going to look in our exiting Cart items to see if that cart item already exits.
// Find will find is true and cart items defined well return you the first item found in our array.
// find , we get each individual cartItem => and we'll check the cartItem.id if it matches the cartItemToAdd.id 
// if it matches it will set that cart item where this condition is true to our const existingCartIte, if it doesn't find anything after looping all of it it will be undefined 



export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id  // 
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

