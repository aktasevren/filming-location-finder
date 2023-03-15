import React from 'react'
import { getPopularMovies, getTopratedMovies, getUpcomingMovies, favouriteMovies, recentlySearchedMovies, } from "../redux/actions/MovieActions";
import { useDispatch, useSelector } from "react-redux";

import popularLogo from "../images/popular.png"
import nextweekLogo from "../images/next-week.png"
import starLogo from "../images/star.png"
import favLogo from "../images/favourite.png"
import searchedLogo from "../images/history.png"

import { Container, Row, Col } from "react-bootstrap"

export default function MovieTypes() {
  const dispatch = useDispatch();

  const [title, TMDBMovieList, fetchValue, fetchResult] = useSelector((state) => [
    state.MovieReducer.typesTitle,
    state.MovieReducer.TMDBMovies,
    state.MovieReducer.fetchValue,
    state.MovieReducer.fetchResult
  ])



  return (
    <Container>
      <Row >
        <Col sm={2} md={4} className="text-center my-3" >
          <button className="btn btn-outline-success w-50 position-relative" type="button" onClick={() => { dispatch(getPopularMovies()) }}><b>Popular Movies</b>
            <img alt="" src={popularLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>

        </Col>
        <Col className="text-center my-3">
          <button className="btn btn-outline-success  w-50 position-relative" type="button" onClick={() => { dispatch(getTopratedMovies()) }}><b>Top Rated Movies</b>
            <img alt="" src={starLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
        <Col className="text-center my-3">
          <button className="btn btn-outline-success  w-50 position-relative" type="button" onClick={() => { dispatch(getUpcomingMovies()) }} ><b>Upcoming Movies</b>
            <img alt="" src={nextweekLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center my-3">
          <button className="btn btn-outline-danger  w-50 position-relative" type="button" onClick={() => { dispatch(favouriteMovies()) }}><b>Favourite Movies</b>
            <img alt="" src={favLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
        <Col className="text-center my-3">
          <button className="btn btn-outline-secondary  w-50 position-relative" type="button" onClick={() => { dispatch(recentlySearchedMovies()) }} ><b>Recently Searched Movies</b>
            <img alt="" src={searchedLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
      </Row>
      {/* <Row>
        <div className="col-12 h2 text-center mt-3">
          {TMDBMovieList.length > 0 ? title : fetchResult.length === 0 ? <div></div> : fetchResult.length === 1 ? `${fetchResult.length} movie found for ${fetchValue}` : `${fetchResult.length} movies found for ${fetchValue}`}
        </div>
      </Row> */}
    </Container>
  )
}


