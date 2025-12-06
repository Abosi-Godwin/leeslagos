import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

import { authData } from "../firebase/config";
export async function signUpApi(email, password, displayName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(authData, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: displayName,
    });

    return user;
  } catch (error) {
    console.error("Firebase Sign Up Error:", error.message);
    throw new Error(error.message);
  }
}
