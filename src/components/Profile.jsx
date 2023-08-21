import React from "react";
import Navbar from "./Navbar";
import Netflix_Avatar from "../assets/Netflix_Avatar.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="  ">
      <Navbar />
      <div className=" text-white bg-black h-screen w-full flex justify-center ">
        <div className=" flex justify-center items-center flex-col w-[50%] h-full max-w-[32rem]">
          <div className=" flex justify-start  w-full pb-2">
            <h1 className=" text-4xl ">Edit Profile</h1>
          </div>

          <div className=" flex border-t border-gray-600  pt-5 w-full ">
            <div className=" mr-5  flex justify-start items-start ">
              <img
                className="  w-[10rem] object-contain "
                src={Netflix_Avatar}
                alt="Netflix_Avatar"
              />
            </div>
            <div className=" flex flex-col w-full">
              <div className=" bg-gray-500 p-2 pr-4 pl-4 border-none rounded-sm w-full " >{user.email}</div>
              <div>
                <h2>plans</h2>
              </div>

              <div className=" mt-3">
               <Link to="/" ><button onClick={()=> auth.signOut()} className="bg-[#E50914] w-full text-[0.9rem] p-1 border-none rounded-sm ">Sign Out</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
