import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getColor,getPokemon } from "../services/pokeapi";

const PokemonCard = ({ image, name }) => {
  const [backgroundColor,setBgc] = useState("#FFFFFF")
  const [pokemonID,setPokemonID] = useState("#001")

  useEffect(()=>{
    getPokemon(name).then((poke)=>{
     setBgc(getColor(poke.types[0].type.name))
     setPokemonID("#"+poke.id)
    })
  },[])

  const navigate = useNavigate();
  const goToPokemon = () => navigate("/pokemon/" + name);

  return (
    <div className="card" onClick={goToPokemon}>
      <div className="imgHolder"  style={{backgroundColor}}>
      <img
        src={image}
        loading="lazy"
        alt={"Image of " + name}
        width="100"
        height="100"
      />
      </div>
      <div className="name">{name}     
       <span className="pokeID">{pokemonID}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
