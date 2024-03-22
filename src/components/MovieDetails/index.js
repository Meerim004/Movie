import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Api_key } from "./../Api_key"
import { Api_key } from "../../Api_key";
import { useParams } from "react-router-dom";
import Actors from "../Actors";
import Trailer from "../Trailer";

const MovieDetails = () => {
   const [detail, setDetail] = useState({});

   const params = useParams();
   console.log(params);

   function getDetail() {
      axios(
         `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${Api_key}&language=en-US`
      ).then((res) => {
         console.log("res", res.data);
         setDetail(res.data);
      });
   }

   useEffect(() => {
      getDetail();
   }, []);

   return (
      <>
         <div
            id="movieDetail"
            style={{
               background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) no-repeat center/cover`,
            }}

            // id="movieDetail"
         >
            <div className="container">
               <div className="movieDetail">
              
                  <img
                     src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${detail.poster_path}`}
                     alt=""
                  />
                  <div className="movieDetail--title">
                     <h1>{detail.title}</h1>
                     <div style={{ display: "flex", margin: "15px 0" }}>
                        {detail.genres?.map((el) => (
                           <h3>{el.name}</h3>
                        ))}
                     </div>
                     <h2 style={{ margin: "10px" }}>{detail.release_date}</h2>
                     <h4 className="prot">
                        {Math.round(detail.vote_average * 10)}%
                     </h4>
                     <p style={{ margin: "10px" }}>{detail.overview}</p>
                  </div>
               </div>
            </div>
         </div>
         <Actors id={params.movieID} />
         <Trailer id={params.movieID} />
      </>
   );
};

export default MovieDetails;
