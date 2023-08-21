import React, { useRef } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("logged in:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error creating user: ${errorCode} - ${errorMessage}`);
    });
  };
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error creating user: ${errorCode} - ${errorMessage}`);
    });
  };

  return (
    <div className=" flex justify-center items-center  backdrop-opacity-10 backdrop-invert bg-black/90  w-[70%] h-[35vh] max-h-[20rem] max-w-[30rem] ">
      <form className="  flex justify-center items-center  w-full border-none flex-col">
        <h1 className=" text-3xl mb-4 text-left ">Sign In</h1>
        <input
          ref={emailRef}
          className=" text-black  text-sm  border-none outline-none  mb-2 w-[60%]  p-2  rounded-sm h-10 "
          type="email"
          id="email"
          name="email"
          placeholder=" Email"
          required
        />

        <input
          ref={passwordRef}
          className=" text-black  text-sm    border-none outline-none  mb-4 w-[60%] p-2 rounded-sm h-10"
          type="password"
          id="password"
          name="password"
          placeholder=" Password"
          required
        />
        <div className="  w-full flex justify-center items-center">
          <button
            onClick={signIn}
            type="submit"
            className=" text-white text-[1rem]  border-none text-xs w-[60%] p-2 bg-[#E50914] rounded-sm h-10"
          >
            Sign In
          </button>
        </div>
        <h4 className=" text-left mt-3 w-[60%] text-[0.9rem]">
          <span className=" text-gray-500">New to Netflix?</span>
          <span onClick={register} className=" hover:underline cursor-pointer">
            SignUp Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
