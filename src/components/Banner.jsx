import React, { useEffect, useState } from "react";
import Netflix_Banner from "../assets/Netflix_Banner.png";
import axios from "../../axios";
import requests from "../../request";

const Banner = () => {

  const [movie, setMovie] = useState([]);

  //fetching data from api
  const fetchData = async () => {
    const request = await axios.get(requests.fetchComedyMovies);

    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    );
  };


  useEffect(() => {
    fetchData();
  }, []);

  // console.log(movie);

  //Limits the number of characters in description.
  const truncate = (string, maxLength) => {
    return string?.length > maxLength ? string.substr(0, maxLength - 1) + "..."
      : string;       
  };


  return (
    <header
      className=" relative bg-cover bg-center bg-no-repeat h-[25rem]   "
      style={movie.backdrop_path ? { backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` } : {}}
    >
      <div className=" text-white pt-28 pl-7 w-[70%]    ">
        <h1 className=" text-5xl font-bold mb-2">{movie?.title}</h1>
        <div>
          <button className=" bg-gray-800 text-white   outline-none  border-none  rounded-sm pl-8 pr-8  pt-1 pb-1  mr-2  hover:text-black hover:bg-white transition-all duration-200">
            Play
          </button>

          <button className=" bg-gray-800 text-white   outline-none  border-none  rounded-sm pl-8 pr-8  pt-1 pb-1 hover:text-black hover:bg-white transition-all duration-200">
            My list
          </button>
        </div>
        <div className=" flex flex-wrap ">
          <h2 className="  text-sm leading-4 pt-2 font-semibold">
            {truncate(movie?.overview,150)}
          </h2>
        </div>
      </div>

      {/* For fade  */}

      <div className=" h-full z-10  absolute bottom-0 bg-gradient-to-b from-transparent via-customColor to-gradientStop"></div>

    </header>
  );
};

export default Banner;
