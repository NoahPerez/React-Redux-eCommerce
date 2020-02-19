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
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;