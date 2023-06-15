import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import MapCard from "./MapCard";

export default function MovieCard() {
  const [movieInfo, showMovie] = useSelector((state) => [
    state.MovieReducer.selectedMovieInfo,
    state.MovieReducer.showMovie,
  ]);

  return (
    // style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movieInfo.poster_path}")`}}
    <Container >
      {showMovie === "SM" ? (
        <Row >
          <Col lg={7} className="m-3">
            <div>
              <b>{movieInfo.tagline}</b>
            </div>
          </Col>
          <div >
            <MapCard />
          </div>

        </Row>

      ) : (
        <MapCard />

      )}
    </Container>

  )
}
