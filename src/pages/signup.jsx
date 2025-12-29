import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Footer from "../sections/footer";
import NavBar from "../components/navBar";

import Button from "../components/button";
import GoogleBtn from "../components/googleBtn";
import Input from "../components/input";

import { signUpApi } from "../auth/signup";

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [formError, setFormError] = useState("");
    const [user, setUser] = useState();

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleHidePassword = () => {
        setHidePassword(prev => !prev);
    };

    const submitFunc = async inputValues => {
        const { email, password, name } = inputValues;
        setFormError("");
        try {
            const data = await signUpApi(email, password, name);
            if (data) {
                navigate("/login", {
                    replace: true
                });
            }
        } catch (err) {
            const start = err.message.indexOf("(");
            const end = err.message.indexOf(")");
            const errorMessage = err.message.slice(start + 1, end);

            switch (errorMessage) {
                case "auth/invalid-email":
                    setFormError("Please enter a valid email address.”");
                    break;
                case "auth/missing-password":
                    setFormError("Please enter a password.");
                    break;
                case "auth/email-already-in-use":
                    setFormError("An account with this email already exists.");
                    break;
                case "auth/weak-password":
                    setFormError("The password is too weak.");
                    break;
                default:
            }
        }
    };
    const handleGoogleAut = () => {};

    return (
        <>
            <NavBar />
            <div className="bg-light-sectionBackground flex py-4 items-center justify-center h-screen max-h-dvh w-screen text-light-text overflow-hidden">
                <div className="p-4 rounded-md bg-white hadow-md shadow-color-2">
                    <h1 className="py-4 font-extrabold text-2xl">
                        Sign-up for an account
                    </h1>

                    <form onSubmit={handleSubmit(submitFunc)}>
                        {formError && (
                            <p className="text-red-600 flex gap-1 justify-center items-center">
                                <FaCircleXmark className="text-red-600 text-xl" />
                                {formError}
                            </p>
                        )}
                        <div className="flex flex-col gap-1 py-3">
                            <Input
                                label="name"
                                inputType="text"
                                valType="name"
                                disable={false}
                                placeholder="Enter your username..."
                                className="p-3 rounded-md outline-0 border"
                                register={register}
                            />

                            <Input
                                inputType="email"
                                valType="email"
                                placeholder="Enter your email..."
                                label="email"
                                className="p-3 rounded-md outline-0 border"
                                register={register}
                            />

                            <Input
                                valType="password"
                                inputType={hidePassword ? "password" : "text"}
                                placeholder="Enter your password..."
                                label="password"
                                className="p-3 rounded-md outline-0 border"
                                disable={false}
                                onHidePassword={handleHidePassword}
                                toggle={hidePassword}
                                register={register}
                            />
                        </div>

                        <div className="py-2 flex flex-col gap-3">
                            <Button
                                text="Sign up"
                                type="submit"
                                loading={false}
                            />

                            <div
                                className="flex gap-3 items-center justify-between
                        "
                            >
                                <div
                                    className="h-0.5 rounded-md w-20
                            bg-light-dividers"
                                ></div>
                                <h1>OR</h1>
                                <div
                                    className="h-0.5 rounded-md w-20
                            bg-light-dividers"
                                ></div>
                            </div>

                            <GoogleBtn handleSignUp={handleGoogleAut} />

                            <div className="flex items-center gap-3">
                                <p>Already a member?</p>
                                <Link
                                    to="/login"
                                    className="text-light-primaryCTA font-bold"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Signup;
