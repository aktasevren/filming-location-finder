import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import "../index.css";
import {
  selectedMovie,
  addFavourite,
  deleteFromFavouriteMovies,
} from "../redux/actions/MovieActions";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function FetchMovies() {
  const dispatch = useDispatch();
  const controlFav = JSON.parse(localStorage.getItem("controlFav"));

  const [fetchResult, showMovie, fetchValue] = useSelector((state) => [
    state.MovieReducer.fetchResult,
    state.MovieReducer.showMovie,
    state.MovieReducer.fetchValue
  ]);

  useEffect(() => { }, [fetchResult]);

  return (

    <Container>
      <Row >
        {/*  */}
        {fetchResult.length > 1 ? <h4 className="text-center mb-5"><b>{`
        ${fetchResult.length} results found for ${fetchValue}`}</b></h4> : <div></div>}
        {showMovie === "FM" ? (
          fetchResult.map((movie) => (
            <Col md={4} xl={3} key={movie.id} >
              <Card className="mb-2"  border="dark" style={{ minHeight: '420px' }}>
                <Card.Img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  onClick={() => {
                    dispatch(
                      selectedMovie(movie.id, movie.poster_path, movie.title)
                    );
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{movie.title}</Card.Title>
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
