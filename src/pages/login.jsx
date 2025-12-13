import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";


import { logInApi } from "../auth/login";

import Footer from "../sections/footer";
import NavBar from "../components/navBar";
import Input from "../components/input";
import Button from "../components/button";
import GoogleBtn from "../components/googleBtn";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [remember, setRemember] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (enteredInfos) => {
    const { email, password } = enteredInfos;
    logInApi(email, password);
  };

  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <>
      <NavBar />

      <div
        className="bg-light-sectionBackground flex items-center justify-center h-screen
        max-h-dvh w-screen  overflow-hidden"
      >
        <div className="p-4 rounded-md bg-white hadow-md shadow-color-2">
          <div className="py-4">
            <h1 className="font-extrabold text-2xl capitalize">Sign into your account</h1>
          </div>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-3 py-3">
              <Input
                valType="email"
                label="email"
                inputType="email"
                placeholder="Enter your email..."
                className="p-3 rounded-md outline-0 border"
                disable={false}
                register={register}
              />

              <Input
                inputType={hidePassword ? "password" : "text"}
                placeholder="Enter your password..."
                label="password"
                valType="password"
                className="p-3 rounded-md outline-0 border"
                disable={false}
                onHidePassword={handleHidePassword}
                toggle={hidePassword}
                register={register}
              />

              <Button
                text="Login"
                type="submit"
                className="bg-light-primaryCTA text-white font-extrabold
                            rounded-md p-2 uppercase w-full flex items-center
                            justify-center"
                disabled={false}
                loader={false}
              />
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-2 font-bold">
                <input
                  type="checkbox"
                  name="remember"
                />
                <p>Remember me</p>
              </div>
              <Link to="/forgotPassword">
                <h1 className="">Lost password?</h1>
              </Link>
            </div>
          </form>
          <div className="py-4 flex flex-col gap-3">
            <div
              className="flex gap-3 items-center justify-between
                        "
            >
              <div
                className="h-0.5 rounded-md w-20
                            bg-light-dividers"
              ></div>
              <h1>OR</h1>{" "}
              <div
                className="h-0.5 rounded-md w-20
                            bg-light-dividers"
              ></div>
            </div>
            <GoogleBtn />
            <div className="flex gap-5 items-center">
              <p>Not a member yet?</p>
              <Link
                to="/signup"
                className="text-light-primaryCTA font-bold"
              >
                Join us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
