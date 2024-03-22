import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api_key } from "../../Api_key";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
   const [person, setPerson] = useState({});
   const { personID } = useParams();

   function getPersonDetails() {
      axios(
         `https://api.themoviedb.org/3/person/${personID}?api_key=${Api_key}&language$=en-US`
      ).then((res) => {
         console.log(res.data);
         setPerson(res.data);
      });
   }

   useEffect(() => {
      getPersonDetails();
   }, []);
   let { profile_path, name, birthday, biography, popularity } = person;
   return (
      <div id="personDetail">
         <div className="container">
            <div className="personDetail">
            <img
               src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${profile_path}`}
               alt=""
            />
            <div>
               <h1>{name}</h1>

               <h4>{birthday}</h4>
               <p>{biography}</p>
               <span>{Math.round(popularity)}%</span>
            </div>
            </div>
         </div>
      </div>
   );
};

export default PersonDetail;
