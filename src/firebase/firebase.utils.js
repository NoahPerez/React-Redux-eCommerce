import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDy1sQ8vta_LexQjECeFqcmiMpo0OTjJP4",
    authDomain: "ecommerce-db-4a1ff.firebaseapp.com",
    databaseURL: "https://ecommerce-db-4a1ff.firebaseio.com",
    projectId: "ecommerce-db-4a1ff",
    storageBucket: "ecommerce-db-4a1ff.appspot.com",
    messagingSenderId: "10289161292",
    appId: "1:10289161292:web:957acf7c870330d93cc0e9",
    measurementId: "G-7BQXMZFXVD"
};
// we get back authenticated user (userAuth)
export const createUserProfileDocument = async (userAuth, additionData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`); // this is to authecate user 

    const snapShot = await userRef.get(); // this is to get a snapshot  to see if we store the user object 

    console.log(snapShot);

    if (!snapShot.exits) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;