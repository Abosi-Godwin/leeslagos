import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { authData } from "../firebase/config";

export function logInApi(email, password) {
  const loginInfos = signInWithEmailAndPassword(authData, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      // const errorMessage = error.message;
      throw new Error(error.message);
    });

  return loginInfos;
}
