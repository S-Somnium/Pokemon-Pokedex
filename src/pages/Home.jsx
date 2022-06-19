import React, { useMemo, useState, useEffect } from "react";
import PokemonCard from "../components/card/PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getPageOfPokemons } from "../services/pokeapi";
import PaginatorBar from "../components/paginator/PaginatorBar";
import initial from "../assets/start_data.json";

const Home = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState(initial);// initial is the first 20 pokemons saved.

  useEffect(() => {
    getPageOfPokemons(page).then(pokemons=>setList(pokemons))
  }, [page]);

  const Pokemons = useMemo(() => {
    return list.results.map((item) => {
      return (
        <Col key={item.name}>
          <PokemonCard
            name={item.name}
          />
        </Col>
      );
    });
  }, [list]);

  return (
    <div className="home">
      <Container className="content" fluid="xxl">
        <Row>{Pokemons}</Row>
        <Row>
          <Col className="paginator">
            <PaginatorBar page={page} setPage={setPage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
