import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ el }) => {
   return (
      <div className="popular--card">
         <NavLink to={`/detail/movie_detail/${el.id}`}>
            <img
               src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
               alt=""
            />
         </NavLink>

         <h4>{el.title}</h4>
         <h5>{el.release_date}</h5>
      </div>
   );
};

export default MovieCard;
