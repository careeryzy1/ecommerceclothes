

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZtrk7DVRxcEyuS9RyMcS8XG37CgrWMgQ",
  authDomain: "ecommerceclothes-db.firebaseapp.com",
  projectId: "ecommerceclothes-db",
  storageBucket: "ecommerceclothes-db.appspot.com",
  messagingSenderId: "884416792909",
  appId: "1:884416792909:web:db77b2e7c8cd71748b4f04"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup (auth,provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
console.log (userDocRef);

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot);
console.log (userSnapshot.exists());

if (!userSnapshot.exists()) {
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc (userDocRef,{
            displayName,
            email,
            createdAt
        });
    } catch (error) {
        console.log ('error creating the user',error.messge);
    }
}

return userDocRef;


}