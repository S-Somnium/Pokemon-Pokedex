import React, { useMemo, useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getPageOfPokemons } from "../services/pokeapi";
import PaginatorBar from "../components/PaginatorBar";
import initial from "../assets/start_data.json";

const Home = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState(initial);

  useEffect(() => {
    getPokemons();
  }, [page]);

  const getPokemons = async () => {
    let pokemons = await getPageOfPokemons(page);
    setList(pokemons);
  };

  const Pokemons = useMemo(() => {
    return list.results.map((item, index) => {
      return (
        <Col key={item.name}>
          <PokemonCard
            name={item.name}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
              item.url.split("/")[6] +
              ".svg"
            }
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
