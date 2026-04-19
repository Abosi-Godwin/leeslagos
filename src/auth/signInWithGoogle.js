import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authData } from "../firebase/config";

export async function signInWithGoogleAPI() {
    const googleProvider = new GoogleAuthProvider();

    try {
        
        const result = await signInWithPopup(authData, googleProvider);

        
        const user = result.user;
        console.log("Success! Logged in as:", user.displayName);

        return user;
    } catch (err) {
        console.error("Error with Google sign in:", err.message);
        throw err;  
    }
}
