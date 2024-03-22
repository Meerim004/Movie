import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div id="header">
         <div className="container">
            <div className="header">
               <div className="header--title">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/popular"}>Popular</Link>
                  <Link to={"/topRated"}>Top Rated</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
