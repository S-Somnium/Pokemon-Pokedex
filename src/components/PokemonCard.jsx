import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ image, name }) => {
  const navigate = useNavigate();

  const goToPokemon = () => navigate("/pokemon/" + name);

  return (
    <div className="card" onClick={goToPokemon}>
      <img
        src={image}
        loading="lazy"
        alt={"Image of " + name}
        width="200"
        height="200"
      />
      <div className="name">{name}</div>
      <span></span>
    </div>
  );
};

export default PokemonCard;
