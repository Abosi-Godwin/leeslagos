import { signInWithEmailAndPassword } from "firebase/auth";
import { authData } from "../firebase/config";

export async function logInApi(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(
            authData,
            email,
            password
        );
        return { user: userCredential.user, error: null };
    } catch (error) {
        return { user: null, error: error.code };
    }
}
