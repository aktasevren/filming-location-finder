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
  LOADING_FALSE,
  GET_LOCATIONS,
  LOADING_TRUE
} from "./ActionTypes";

import axios from "axios";

//HomePage Popular Movies //
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
//HomePage Popular Movies //

//HomePage Top Rated Movies //
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
//HomePage Top Rated Movies //

//HomePage Upcoming Movies //
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
//HomePage Upcoming Movies //

//Movies found as a result of searched value //
export const fetchMovies = (movieValue) => (dispatch) => {
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
};
//Movies found as a result of searched value //

//Searched Value //
export const fetchValue = (value) => (dispatch) => {
  dispatch({
    type: FETCH_VALUE,
    payload: value,
  });
};
//Searched Value //

//Add Movies to Favourite List //
export const favouriteMovies = () => (dispatch) => {
  dispatch({
    type: FAVOURITE_MOVIES,
  });
};
//Add Movies to Favourite List //

//Add Movies to Favourite List //
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
//Add Movies to Favourite List //

//Delete Movies to Favourite List //
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
//Delete Movies to Favourite List //

//The movie whose locations you want to see //
export const selectedMovie = (id) => async (dispatch) => {


  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    )
    .then((response) =>
      // console.log(response.data.imdb_id)

      dispatch({
        type: SELECTED_MOVIE,
        payload: response.data,
      })
    );

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    )
    .then((response) =>
      // console.log(response.data.imdb_id)


      axios.get(`https://imdb-server-ljf3.onrender.com/imdbid/${response.data.imdb_id}`).then((response) =>
      // axios.get(`http://localhost:3000/imdbid/${response.data.imdb_id}`).then((response) =>
      (
        dispatch({
          type: GET_LOCATIONS,
          payload: response.data,
        })
      )
      )
    );



};

export const getLocs = (id) => async (dispatch) => {


  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    )
    .then((response) =>
      // console.log(response.data.imdb_id)

      dispatch({
        type: SELECTED_MOVIE,
        payload: response.data,
      })
    );


};









//The movie whose locations you want to see //

//Recenty Searched Movies //
export const recentlySearchedMovies = () => (dispatch) => {
  dispatch({
    type: RECENTLY_SEARCHED_MOVIES,
  });
};
//Recenty Searched Movies //

//Loading //
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
//Loading //
