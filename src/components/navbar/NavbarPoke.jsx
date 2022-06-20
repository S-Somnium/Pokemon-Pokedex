import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const NavbarPoke = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar" sticky="top">
      <Container>
        <Nav>
          <Link to="/" className="links">
            Pokedex
          </Link>
          <Link to="/favorites" className="links">
            Favorites
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarPoke;
