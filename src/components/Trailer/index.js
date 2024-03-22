import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api_key } from "../../Api_key";

const Trailer = ({ id }) => {
   const [traile, setTrailer] = useState([]);

   function getTrailer() {
      axios(
         `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_key}&language=en-US`
      ).then((res) => {
         console.log(res.data.results);
         setTrailer(res.data.results);
      });
   }

   useEffect(() => {
      getTrailer();
   });

   return (
      <div className="trailer-vidio">
         {traile.map((el) => (
            <div className="trailer">
               <iframe
                  width="300"
                  height="520"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  title=""
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
               ></iframe>
            </div>   
         ))}
      </div>
   );
};

export default Trailer;
