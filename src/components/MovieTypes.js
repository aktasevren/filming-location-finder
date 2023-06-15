import React from 'react'
import { getPopularMovies, getTopratedMovies, getUpcomingMovies } from "../redux/actions/MovieActions";
import { useDispatch } from "react-redux";
import popularLogo from "../images/popular.png"
import nextweekLogo from "../images/next-week.png"
import starLogo from "../images/star.png"
import { Container, Row, Col } from "react-bootstrap"

export default function MovieTypes() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row >
        <Col md={4} sm={12} className="text-center my-3" >
          <button className="btn btn-outline-success  position-relative p-3" type="button" onClick={() => { dispatch(getPopularMovies()) }}><b>Popular Movies</b>
            <img alt="" src={popularLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
        <Col md={4} sm={12} className="text-center my-3">
          <button className="btn btn-outline-success   position-relative p-3" type="button" onClick={() => { dispatch(getTopratedMovies()) }}><b>Top Rated Movies</b>
            <img alt="" src={starLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
        <Col md={4} sm={12} className="text-center my-3">
          <button className="btn btn-outline-success  position-relative p-3" type="button" onClick={() => { dispatch(getUpcomingMovies()) }} ><b>Upcoming Movies</b>
            <img alt="" src={nextweekLogo} width="32" height="32" className='position-absolute translate-middle top-0 start-0'></img>
          </button>
        </Col>
      </Row>
    </Container>
  )
}


