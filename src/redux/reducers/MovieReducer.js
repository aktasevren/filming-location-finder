import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  FETCH_VALUE,
  FETCH_MOVIES,
  FAVOURITE_MOVIES,
  ADD_FAVOURITE,
  DELETE_FROM_FAVOURITE_MOVIES,
  SELECTED_MOVIE,
  RECENTLY_SEARCHED_MOVIES,
  GET_LOCATIONS,
  LOADING_FALSE,
  LOADING_TRUE
} from "../actions/ActionTypes";

const initialState = {
  showMovie: "PM",
  TMDBMovies: [],
  typesTitle: "Popular Movies",
  fetchResult: [],
  favoMovies: [],
  selectedMovieInfo: [],
  filmingLocs: [],
  image:"",
  loading:false,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        showMovie: "PM",
        TMDBMovies: action.payload,
        typesTitle: "Popular Movies",
      };
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        showMovie: "TRM",
        TMDBMovies: action.payload,
        typesTitle: "Top Rated Movies",
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        showMovie: "UM",
        TMDBMovies: action.payload,
        typesTitle: "Upcoming Movies",
      };
    case FETCH_VALUE:
      return {
        ...state,
        fetchValue: action.payload,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        showMovie: "FM",
        typesTitle: "",
        fetchResult: action.payload,
        loading:false,
      };
    case FAVOURITE_MOVIES:
      return {
        ...state,
        showMovie: "FAM",
        typesTitle: "Your Favourite Movies",
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favoMovies: [...state.favoMovies, action.payload],
      };
    case DELETE_FROM_FAVOURITE_MOVIES:
      return {
        ...state,
        favoMovies: [action.payload],
      };
    case SELECTED_MOVIE:
      return {
        ...state,
        showMovie: "SM",
        selectedMovieInfo: action.payload,
        typesTitle: "",
        loading:false
      };
    case RECENTLY_SEARCHED_MOVIES:
      return {
        ...state,
        showMovie: "RSM",
        typesTitle: "Recently Searched Movies",
      };
    case GET_LOCATIONS:
      return {
        ...state,
        filmingLocs: action.payload,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case LOADING_TRUE:
        return {
          ...state,
          loading: true,
        };
    default:
      return state;
  }
};

export default MovieReducer;
