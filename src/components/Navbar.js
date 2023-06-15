import React from "react";
import myLogo from "../images/popcorn.png";
import githubLogo from "../images/github.png";
import tmdbLogo from "../images/tmdb.svg";

import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export default function Nav() {
  return (
    <Navbar sticky="top" bg="light" className="shadow">
      <Container>
        <NavbarBrand href="/">
          <img src={myLogo} alt="filming-location-finder-logo" width="40" height="40" className="me-3" />
          <b style={{ fontSize: 24, color: "black" }}>Filming Location Finder</b>
        </NavbarBrand>
        <div>
          <a href="https://github.com/aktasevren/filming-location-finder" target="_blank" >
            <img src={githubLogo} alt="" width="25" height="25" className="me-3" />
          </a>
          <a href="https://www.themoviedb.org/" target="_blank" >
            <img src={tmdbLogo} alt="" width="25" height="25" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
