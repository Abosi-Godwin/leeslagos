import { signInWithEmailAndPassword } from "firebase/auth";

import { authData } from "../firebase/config";

export function logInApi(email, password) {
    const loginInfos = signInWithEmailAndPassword(authData, email, password)
        .then(userCredential => {
            
            const user = userCredential.user;
            return user;
        })
        .catch(error => {
            throw new Error(error.message);
        });

    return loginInfos;
}
