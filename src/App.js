import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import MovieDetails from "./components/MovieDetails";
import PersonDetail from "./components/PersonDetail";
// import Actors from "./components/Actors";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/topRated" element={<TopRated />} />
            <Route
               path="/detail/movie_detail/:movieID"
               element={<MovieDetails />}
            />
            <Route path="/detail/person_detail/:personID" element ={<PersonDetail/>}/>
         </Routes>
      </div>
   );
}

export default App;
