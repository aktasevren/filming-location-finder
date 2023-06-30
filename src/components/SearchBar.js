import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchValue, loadingTrue } from "../redux/actions/MovieActions";
import alertify from "alertifyjs";
import { Row, Col, Container, Button, Form, InputGroup } from "react-bootstrap";

export default function SearchBar() {
  const dispatch = useDispatch();
  const fetchMovieValue = useSelector((state) => state.MovieReducer.fetchValue);
  const onChange = (e) => {
    dispatch(fetchValue(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (fetchMovieValue === undefined || null) {
      alertify.alert("Error", "Please type something!", function () {
      });
    } else {
      dispatch(loadingTrue());
      dispatch(fetchMovies(fetchMovieValue));
    }
  };

  return (
    <Container>
      <Row  className="d-flex justify-content-center">
        <Col lg={8}>
          <InputGroup style={{height:48}} className="my-5" onChange={onChange}>
            <Form.Control placeholder="Type a movie name ..." />
            <Button onClick={onSubmit} className="btn btn-dark">
               <b>SEARCH</b> 
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
