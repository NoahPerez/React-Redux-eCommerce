import { createSelector } from 'reselect'

// it is an object that maps the string value respective ID where the string value that we are getting from URL parameter /shop/hats will be actual property
// going to pass in that string and then use that string as the dynamic value of the property to get the correct ID and then we'll match it in our selector

// we are using this object because our id parameter is a string because the id that we want to match is a number 

// don't need this anymore 
// const COLLECTION_ID_MAP = {  //*
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    // Objects to arrays  
    // want our collections objects to be in array instead so we will map() over this array of keys that we have. We will add that key value 
    //Object.keys what does it do it get all the keys of an object that we pass into it () and gives it to us in an array format 
    // we will get all the keys of our collection now we will have all the value that the object has 
)

// takes collectionUrlParams this function will return is createSelector
// it is a function that returns another function Currying 
// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections], // that get
//         // we will have our collections
//         // find()base on this function it will pass it it's going to run this function on each element from left yo right in out array util it finds one where the function returns true and then give us back the element that returns true based on the function call
//         //* find collection.id matching the ulr parameter of our collection id map
//         collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//         //if we had 1000 collections and the one we was looking for is the last one. It will take long time for it iterate every elements before finds the correct collection item we want and this is the flaw in storing data 
//         // that we need to query individual elements for inside of an array instead. What we can do is store it in an object instead,
//         // if we store it in a object you can see how it's similar to what we did with our collection COLLECTION_ID_MAP 
//         // Where we find the actual property of our object by passing it and dynamically rendering property using this collection you are all parameter except instead of getting the I.D we would actually get the colleciton object it self this concept of storing lists of elements inside of an object instead 
//         // of an array is called data normalization and it quite simple 
//         // change the data into object not an array 
//     )

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );