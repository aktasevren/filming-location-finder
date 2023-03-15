import FavouriteCard from "./components/FavouriteCard";
import FetchMovies from "./components/FetchMovies";
import MapCard from "./components/MapCard";
import MovieCard from "./components/MovieCard";
import MovieTypes from "./components/MovieTypes";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchedMovies from "./components/SearchedMovies";
import TMDBMovieCard from "./components/TMDBMovieCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {  	SpinnerRoundFilled } from 'spinners-react';

function App() {
  const [movieInfo,loading,showMovie] = useSelector((state) => [
    state.MovieReducer.selectedMovieInfo,
    state.MovieReducer.loading,
   state.MovieReducer.showMovie,

  ]);

  useEffect(()=>{
  })

   return (
  //   // style={{backgroundImage: `url("{movieInfo.image}")`}}

  //   <div>
  // {showMovie === "SM" ? (
  // <div style={{ 
  //   backgroundImage: `url("https://via.placeholder.com/500")` 
  // }}>
  //     <Navbar />
  //     <SearchBar />
  //     <MovieTypes />
  //     {loading ? <div className="d-flex justify-content-center"><SpinnerRoundFilled size={100} color='red'/></div> : <div></div>}
  //     {/* Homepage Movies */}
  //     <TMDBMovieCard />
  //     {/* Searched Movie */}
  //     <FetchMovies />
  //     <MovieCard />
  //     {/* Leaflet Map */}
  //     {/* <MapCard /> */}
  //     {/* Favourite Movies */}
  //     <FavouriteCard />
  //     {/* Recently Searched Movie */}
  //     <SearchedMovies /> 
  //   </div> ) : (<div></div>)
    
  <div>
    {showMovie === "SM" ? (  
  //      <div style={{ 
  //    backgroundImage: `url("https://image.tmdb.org/t/p/original${movieInfo.poster_path}")`
  //    ,backgroundSize:'cover'
     
  //  }}>
  <div>
       <Navbar />
       {/* Homepage Movies */}
       {/* Searched Movie */}
       <MovieCard />
       {/* Leaflet Map */}
       {/* <MapCard /> */}
       {/* Favourite Movies */}
       {/* Recently Searched Movie */}
     </div>
     ) : (<div>

      <Navbar />
       <SearchBar />
       <MovieTypes />
       {loading ? <div className="d-flex justify-content-center"><SpinnerRoundFilled size={100} color='red'/></div> : <div></div>}
       {/* Homepage Movies */}
       <TMDBMovieCard />
       {/* Searched Movie */}
       <FetchMovies />
       {/* Leaflet Map */}
       {/* <MapCard /> */}
       {/* Favourite Movies */}
       <FavouriteCard />
       {/* Recently Searched Movie */}
       <SearchedMovies /> 
     </div>)}
  </div>
   )
}

export default App;
