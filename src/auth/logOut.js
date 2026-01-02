import { signOut } from "firebase/auth";
import { authData } from "../firebase/config";

export function logOutApi() {
    signOut(authData)
        .then(() => {
        })
        .catch(error => {
            console.error("Sign Out Error", error);
        });
}
