import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  FETCH_VALUE,
  FETCH_MOVIES,
  ADD_FAVOURITE,
  DELETE_FROM_FAVOURITE_MOVIES,
  FAVOURITE_MOVIES,
  SELECTED_MOVIE,
  RECENTLY_SEARCHED_MOVIES,
  GET_LOCATIONS,
  LOADING_FALSE,
  LOADING_TRUE
} from "./ActionTypes";

import axios from "axios";


export const getPopularMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    )
    .then((response) =>

      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: response.data.results,
      })
    )
    .catch((err) => console.log(err));

};
export const getTopratedMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    )
    .then((response) =>
      dispatch({
        type: GET_TOP_RATED_MOVIES,
        payload: response.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const getUpcomingMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    )
    .then((response) =>
      dispatch({
        type: GET_UPCOMING_MOVIES,
        payload: response.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovies = (movieValue) => (dispatch) => {
  var today = new Date();
  var requestTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();

  console.log("Searching Value : " + movieValue)
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${movieValue}&page=1&include_adult=false`
    )
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.results,
      })
    )
  var responseTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
};

export const fetchValue = (value) => (dispatch) => {

  dispatch({
    type: FETCH_VALUE,
    payload: value,
  });
};

export const favouriteMovies = () => (dispatch) => {
  dispatch({
    type: FAVOURITE_MOVIES,
  });
};

export const addFavourite = (id) => async (dispatch) => {
  var controlFav = JSON.parse(localStorage.getItem("controlFav"));
  if (controlFav === null) controlFav = [];

  if (controlFav.includes(id) === false) {
    controlFav.push(id);
    localStorage.setItem("controlFav", JSON.stringify(controlFav));
    var favMovies = JSON.parse(localStorage.getItem("favMovies"));
    if (favMovies === null) favMovies = [];
    var getFavMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    );
    var newFavMovie = await getFavMovie.data;
    favMovies.push(newFavMovie);
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
    dispatch({
      type: ADD_FAVOURITE,
      payload: id,
    });
  }
};

export const deleteFromFavouriteMovies = (id) => (dispatch) => {
  var controlFav = JSON.parse(localStorage.getItem("controlFav"));
  controlFav = controlFav.filter((movie) => movie !== id);
  localStorage.setItem("controlFav", JSON.stringify(controlFav));
  if (controlFav.length === 0) {
    localStorage.removeItem("controlFav");
  }

  var favMovies = JSON.parse(localStorage.getItem("favMovies"));
  favMovies = favMovies.filter((movie) => movie.id !== id);

  localStorage.setItem("favMovies", JSON.stringify(favMovies));
  if (favMovies.length === 0) {
    localStorage.removeItem("favMovies");
  }
  dispatch({
    type: DELETE_FROM_FAVOURITE_MOVIES,
    payload: id,
  });
};

export const selectedMovie = (id, poster, title) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    )
    .then((response) =>
      dispatch({
        type: SELECTED_MOVIE,
        payload: response.data,
      })
    )

    ;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    )
    .then((response) =>
      axios.get(
        `https://www.myapifilms.com/imdb/idIMDB?idIMDB=${response.data.imdb_id}&token=${process.env.REACT_APP_MYAPIFILMS_API}&format=json&language=en-us&aka=1&filmingLocations=2`
      )
    )
    .then((response) =>
      dispatch({
        type: GET_LOCATIONS,
        payload: response.data.data.movies[0].filmingLocations,
      })
    )
};

export const recentlySearchedMovies = () => (dispatch) => {
  dispatch({
    type: RECENTLY_SEARCHED_MOVIES,
  });
};


export const loadingTrue = () => (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
};

export const loadingFalse = () => (dispatch) => {
  dispatch({
    type: LOADING_FALSE,
  });
};