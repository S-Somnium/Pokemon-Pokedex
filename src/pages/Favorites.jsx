import React, { useMemo, useState, useEffect } from "react";
import PokemonCard from "../components/card/PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Favorites = () => {
  const [list, setList] = useState(undefined);

  useEffect(() => {
    setList(Object.keys(JSON.parse(localStorage.favorites)));
  }, []);

  const Pokemons = useMemo(() => {
    if (!list) return <></>;
    return list.map((name) => {
      return (
        <Col key={name} >
          <PokemonCard name={name} />
        </Col>
      );
    });
  }, [list]);

  return (
    <div className="favorites">
      <Container className="content" fluid="xxl">
        <Row>{Pokemons}</Row>
      </Container>
    </div>
  );
};

export default Favorites;
