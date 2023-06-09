import { signInWithGooglePopup,
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";



const SignIn = () => {
    const logGoogleUser = async () => {
        // const response =await signInWithGooglePopup();
        // console.log (response);
        const {user} =await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (

        <div>
            <h1> sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
    
};

export default SignIn;