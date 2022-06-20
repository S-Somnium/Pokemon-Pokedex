import React from 'react';

const Card = ({backgroundColor,pokemonID,name,back}) => {

    return (
        <div className="card" >
      <div className="imgHolder" style={{ backgroundColor }}>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(back?"back/":"") +
            pokemonID +
            ".png"
          }
          loading="lazy"
          alt={"Image of " + name}
          width="130"
          height="130"
        />
      </div>
      <div className="name">
        {name}
        <span className="pokeID">#{pokemonID}</span>
      </div>
    </div>
    );
};

export default Card;