import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovies,
  selectedMovie,
  loadingTrue,
  loadingFalse,
} from "../redux/actions/MovieActions";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../index.css";

export default function TMDBMovieCard() {
  const dispatch = useDispatch();
  const [TMDBMovieList, showMovie] = useSelector((state) => [
    state.MovieReducer.TMDBMovies,
    state.MovieReducer.showMovie,
  ]);

  useEffect(() => {
    dispatch(loadingTrue())
    dispatch(getPopularMovies());
    dispatch(loadingFalse())
  }, [dispatch]);

  return (

    <Container>
      <Row className='mt-5'>
        {showMovie === "PM" || showMovie === "TRM" || showMovie === "UM" ? (
          TMDBMovieList.map((movie) => (
            <Col md={4} xl={3} key={movie.id}>
              <Card className="mb-2" border='dark' style={{ minHeight: '420px' }}>
                <Card.Img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} onClick={() => { dispatch(loadingTrue()); dispatch(selectedMovie(movie.id, movie.poster_path, movie.title)) }} />
                <Card.Body>
                  <Card.Title className='text-center'>
                    {movie.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div></div>
        )}
      </Row>
    </Container>
  );
}
