import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLike } from "react-icons/fc";
import { deleteFromFavouriteMovies, selectedMovie } from "../redux/actions/MovieActions"

export default function FavouriteCard() {

  const dispatch = useDispatch();

  const [showMovie,favoMovies] = useSelector((state) => [
    state.MovieReducer.showMovie,
    state.MovieReducer.favoMovies
  ])

  const movieFromLocalStorage = JSON.parse(localStorage.getItem("favMovies"))


  useEffect(() => {
  }, [favoMovies])

  return (
    <div className="container card-group mt-3">
      <div className="row">
        {movieFromLocalStorage != null && showMovie === "FAM" ? movieFromLocalStorage.map((movie) => (
          <div className="card col-md-3 col-sm-6">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="card-img" alt="..." onClick={() => {dispatch(selectedMovie(movie.id,movie.poster_path,movie.title))}}/>
            <FcLike className="falike" size={50} color="red" onClick={() => { dispatch(deleteFromFavouriteMovies(movie.id)) }} />
            <div className="card-body">
              <h5 className="card-title text-center">{movie.title}</h5>
            </div>
          </div>
        )) : ""}
      </div>
    </div>
  );
}
