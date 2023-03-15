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

    <Container >
      {showMovie === "SM" ? (
        <Row >
          <Col lg={7} className="m-3">
            <div>
              <b>Title : </b>
              {movieInfo.title}
            </div>
            <br />
            <div>
              <b>Release Date : </b>
              {movieInfo.release_date}
            </div>
            <br />
            <div>
              <b>Runtime : </b>
              {movieInfo.runtime}
            </div>
            <br />
            {/* <br />
            <div>
              <b>Genres : </b>
              {movieInfo.genres}
            </div>
            <br /> */}
          </Col>
          <div >          <MapCard /> </div>

        </Row>

      ) : (""
        // <MapCard /> 

      )}
    </Container>

  )
}
