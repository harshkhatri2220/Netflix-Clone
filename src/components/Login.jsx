import React, { useState } from "react";
import Netflix_logo from "../assets/Netflix_logo.png";
import Login_Bg from "../assets/Login_Bg.jpg";
import SignUp from "./SignUp";
const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${Login_Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" flex flex-col  w-full h-screen   relative   "
    >
      <div className="flex justify-between h-20 z-10  ">
        <div className=" flex justify-center items-center">
          <img
            className=" w-30 h-20 ml-3 object-contain  cursor-pointer "
            src={Netflix_logo}
            alt="Netflix_Logo"
          />
        </div>

        <div className=" flex justify-center items-center h-20">
          <button
            onClick={() => {
              setSignIn(true);
            }}
            className="  mr-3   pt-[6px] pb-[6px] pr-4 pl-4  text-white border-none cursor-pointer   object-contain  bg-[#E50914] text-xs font-[500]  "
          >
            Sign In
          </button>
        </div>
      </div>

      <div className=" bg-black h-screen w-full opacity-50 absolute   "></div>
      <div className=" bg-gradient-to-b from-black to-transparent  opacity-50  h-[50vh] w-full  absolute    "></div>
      <div className=" bg-gradient-to-t from-black to-transparent  opacity-50  h-[50vh] w-full  fixed bottom-0    "></div>

      <div className=" absolute z-20 text-white top-[35%]  p-3  flex flex-col justify-center items-center w-full">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1 className=" text-center text-4xl  mb-2 font-bold">
              Unlimited films,TV programmes and more.
            </h1>
            <h2 className=" text-center text-2xl">
              Watch anywhere. Cancel at any time.
            </h2>

            <form className=" flex justify-center items-center mt-4  w-full border-none ">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" Email Address"
                required
                className=" text-black  text-sm pr-4 pl-2 h-10   border-none outline-none w-[30%] max-w-[30%] "
              />
              <div className=" flex justify-center items-center">
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  type="submit"
                  className=" bg-[#E50914] h-10 pr-3 pl-3 border-none text-sm"
                >
                  GET STARTED
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
