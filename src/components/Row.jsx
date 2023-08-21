import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "../customCss.css"
const Row = ({ title, fetchURL, isLargeRow = false }) => {

    const base_url = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);

    
 
    useEffect(() => {
        const fetchMovies = async () => {
             const request = await axios.get(fetchURL);
    
            setMovies(request.data.results);
    
            console.log(movies); 
            return request;
        };
        fetchMovies();
    }, []);

    return (
        <div className=" p-3 text-xl font-semibold ">
            <h2 className=" text-white">{title}</h2>
            <div className=" flex overflow-x-scroll overflow-y-hidden scrollbar-none py-3 group object-contain ">
            {movies.map((movie) =>(
                <img
                key={movie.id} 
                src={`${base_url}${movie.backdrop_path}`} 
                alt={movie.name}
                className="max-h-32 mr-3 transition-all duration-[400ms] hover:scale-105 cursor-pointer " />
                // isLargeRow ? movie.poster_path : movie.backdrop_path
            ))}
            </div>
        </div>
    );
};

export default Row;
