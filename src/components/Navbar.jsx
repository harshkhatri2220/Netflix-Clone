import React from "react";
import { useEffect, useState } from "react";
import Netflix_logo from "../assets/Netflix_logo.png";
import Netflix_Avatar from "../assets/Netflix_Avatar.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const navTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navTransition);
    // return () =>{ window.removeEventListener("scroll" , navTransition)}   //This is a clean up
  }, []);

  return (
    <div
      className={` ${
        show && "bg-black"
      } z-10 fixed w-full ease-in duration-500 h-120 `}
    >
      <div className=" flex justify-between">
        <Link to="/"><img
          className="  w-30 h-20 object-contain  cursor-pointer  ml-4"
          src={Netflix_logo}
          alt="Netflix_logo"
        /></Link>

        <Link to="/profile">  <img
          className="  w-10 h-20 object-contain  mr-5 cursor-pointer"
          src={Netflix_Avatar}
          alt="Netflix_Avatar"
        />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
