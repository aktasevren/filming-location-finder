import FetchMovies from "./components/FetchMovies";
import MovieCard from "./components/MovieCard";
import MovieTypes from "./components/MovieTypes";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import TMDBMovieCard from "./components/TMDBMovieCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SpinnerRoundFilled } from 'spinners-react';

function App() {
  const [loading, showMovie] = useSelector((state) => [
    state.MovieReducer.loading,
    state.MovieReducer.showMovie,

  ]);

  useEffect(() => {
  })

  return (

    <div>
      {showMovie === "SM" ? (
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
        {loading ? <div className="d-flex justify-content-center"><SpinnerRoundFilled size={100} color='red' /></div> : <div></div>}
        {/* Homepage Movies */}
        <TMDBMovieCard />
        {/* Searched Movie */}
        <FetchMovies />
        {/* Leaflet Map */}
        {/* <MapCard /> */}
        {/* Favourite Movies */}
        {/* Recently Searched Movie */}
        {/* <SearchedMovies />  */}
      </div>)}
    </div>
  )
}

export default App;