import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import {
  addFavourite,
  selectedMovie,
  deleteFromFavouriteMovies,
} from "../redux/actions/MovieActions";


export default function SearchedMovies() {
  const dispatch = useDispatch();
  const showMovie = useSelector((state) => state.MovieReducer.showMovie);
  const [movies, setMovies] = useState([]);
  const controlFav = JSON.parse(localStorage.getItem("controlFav"));

  return (
    <div className="container card-group mt-3" >
      <div className="row">
        {showMovie === "RSM"
          ? movies.map((movie) => (
            <div className="card col-md-2 col-sm-6">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.moviePoster}`}
                className="card-img"
                alt="..."
                onClick={() => {
                  dispatch(
                    selectedMovie(movie.movieId, movie.moviePoster, movie.movieTitle)
                  );
                }}
              />
              {controlFav !== null && controlFav.includes(movie.movieId) ? (
                <FcLike
                  className="falike"
                  size={32}
                  onClick={() => {
                    dispatch(deleteFromFavouriteMovies(movie.movieId));
                  }}
                />
              ) : (
                <FcLikePlaceholder
                  className="falike"
                  size={32}
                  onClick={() => {
                    dispatch(addFavourite(movie.movieId));
                  }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title text-center">{movie.movieTitle}</h5>
              </div>
            </div>
          ))
          : ""}
      </div>
    </div>

  );
}
