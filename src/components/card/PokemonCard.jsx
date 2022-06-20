import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getColor, getPokemon } from "../../services/pokeapi";
import Card from "./Card";

// this variable is responsible for deciding whether to flip the cards, showing the back of the pokemon first.
const invertCard = true

const PokemonCard = ({ name }) => {
  const [backgroundColor, setBgc] = useState("#FFFFFF");
  const [pokemonID, setPokemonID] = useState(0);

  useEffect(() => {
    getPokemon(name).then((poke) => {
      setBgc(getColor(poke.types[0].type.name));
      setPokemonID(poke.id);
    });
  }, []);

  const navigate = useNavigate();
  const goToPokemon = () => navigate("/pokemon/" + name);

  return (
    <div className="flip-card" data-testid="PokemonCard" onClick={goToPokemon}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card back={invertCard} backgroundColor={backgroundColor} pokemonID={pokemonID} name={name}/>
        </div>
        <div className="flip-card-back">
        <Card back={!invertCard} backgroundColor={backgroundColor} pokemonID={pokemonID} name={name}/>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
