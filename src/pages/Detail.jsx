import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { getColor } from "../services/pokeapi";

const Detail = (props) => {
  return (
    <div
      className="detail"
      style={{ boxShadow: "0px 0px 0px 3000px " + getColor("dragon") , borderRadius:"20px"}}>
      <Container>
        <Row>
          <Col>
            <div className="name">
              Bagon <span>#371</span>
            </div>
          </Col>
          <Col>
          <div className="capturar">
            <div className="pokebola">
            <div className="bola"></div>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col style={{ maxWidth: "130px" }}>
            <img
              src={"https://play.pokemonshowdown.com/sprites/gen5/bagon.png"}
              loading="lazy"
              alt={"Image of " + "Bagon"}
              width="110"
              height="110"
              style={{ marginLeft: "10px" }}
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="title">Types:</div>
                Dragon
              </Col>
              <Col>
                <div className="title">Size:</div>
                0,6m, 42.1kg
              </Col>
            </Row>
            <Row>
              <div className="title">Abilities:</div>
              friend-guard
            </Row>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
