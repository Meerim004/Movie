import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api_key } from "./../Api_key";
import MovieDetails from "../components/MovieDetails";
import { NavLink } from "react-router-dom";
import MovieCard from "../components/movieCard";

const Popular = () => {
   const [popular, setPopular] = useState([]);

   function getPopular() {
      axios(
         `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=ru-RU&page=1`
      ).then((res) => {
         console.log(res.data.results);
         setPopular(res.data.results);
      });
   }

   useEffect(() => {
      getPopular();
   }, []);

   return (
      <div id="popular">
         <div className="container">
            <div className="popular">
               {popular.map((el) => (
                  <MovieCard el={el} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Popular;
