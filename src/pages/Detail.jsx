import React,{useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { getColor,getPokemon } from "../services/pokeapi";

const Detail = () => {
  const [data,setData] = useState(undefined)
  // captured is a variable that represent if this pokemon is a favorite or not
  // capture = not favorite
  // captured = favorite
  const [captured,setCaptured] = useState("capture")
  const { pokemonId } = useParams();

  useEffect(()=>{
    getPokemon(pokemonId).then((json)=>{
      setData(json)
      let {favorites} = localStorage
      let favoriteList = JSON.parse(favorites)
      if(favoriteList[pokemonId]){ // if this pokemon is on the list, so change the state to release.
        setCaptured("release")
      }
    })

  },[])

  useEffect(()=>{
    if(!data)return // we dont want to execute the code before the data is received
    let {favorites} = localStorage
    let favoriteList = JSON.parse(favorites)
    if(captured ==="release"){ //this var change to release when we capture the pokemon
      favoriteList[pokemonId] = {} // we dont need data, we just need the key stored.
    }else if(favoriteList[pokemonId]){ // here we delete the pokemon from favorite
      delete favoriteList[pokemonId]
    }
    localStorage.setItem('favorites',JSON.stringify(favoriteList))
  },[captured])

  const CaptureOrRelease = () =>{
    if(captured==="capture"){
      setCaptured("release")
    }else{
      setCaptured("capture")
    }
  }

  if(!data)return <div></div> // it must be here otherwise the next line will throw error.
  let {id,name,height,weight,abilities,types,stats} = data;
  let typeColor = getColor(types[0].type.name)
  return (
    <div
      className="detail"
      style={{ boxShadow: "0px 0px 0px 3000px " + typeColor , borderRadius:"20px"}}>
      <Container>
        <Row >
          <Col>
            <div className="name">
              {name} <span>#{id}</span>
            </div>
          </Col>
          <Col>
          <div className="capturar" onClick={CaptureOrRelease}>
            {captured}
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
          <Col style={{ maxWidth: "130px",marginLeft:"-10px",marginRight:"10px" }}>
            <img
              src={"http://play.pokemonshowdown.com/sprites/xyani/"+name+".gif"}
              loading="lazy"
              alt={"Image of " + name}
              width="110"
              height="110"
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="title">Types:</div>
               <div style={{display:"flex"}}>
               {types.map((e)=>(
                   <div className="types" style={{backgroundColor:getColor(e.type.name)}} key={"type"+e.type.name}>
                      {e.type.name}
                  </div>
                ))}
               </div>
              </Col>
              <Col>
                <div className="title">Size:</div>
                {height}0cm, {weight/10}kg{
                // a small fix on the data from the api
                }
              </Col>
            </Row>
            <Row>
              <div className="title">Abilities:</div>
              <div style={{display:"flex"}}>
              {abilities.map(e=>(
                 <div className="abilities" key={"abilities"+e.ability.name}>
                  {e.ability.name}
                </div>
              ))}
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <br/>
        </Row>
        <Row>
          <Col>
              <b>Stats</b>
          </Col>
        </Row>
        <Row>
          <Col className="stats">HP</Col>
          <Col className="statsBar" style={{maxWidth:(stats[0].base_stat)/1.6+"%"}}>
          <div className="bar" style={{backgroundColor:typeColor}}></div>
          </Col>
        </Row>
        <Row>
          <Col className="stats">Attack</Col>
          <Col className="statsBar" style={{maxWidth:(stats[1].base_stat)/1.6+"%"}}>
          <div className="bar" style={{backgroundColor:typeColor}}></div>
          </Col>
        </Row>
        
        <Row>
          <Col className="stats">Defense</Col>
          <Col className="statsBar" style={{maxWidth:(stats[2].base_stat)/1.6+"%"}}>
          <div className="bar" style={{backgroundColor:typeColor}}></div>
          </Col>
        </Row>
        
        <Row>
          <Col className="stats">Sp. Attack</Col>
          <Col className="statsBar" style={{maxWidth:(stats[3].base_stat)/1.6+"%"}}>
          <div className="bar" style={{backgroundColor:typeColor}}></div>
          </Col>
        </Row>
        
        <Row>
          <Col className="stats">Sp. Defense</Col>
          <Col className="statsBar" style={{maxWidth:(stats[4].base_stat)/1.6+"%"}}>
          <div className="bar" style={{backgroundColor:typeColor}}></div>
          </Col>
        </Row>
        
        <Row>
          <Col className="stats">Speed</Col>
          <Col className="statsBar" style={{maxWidth:(stats[5].base_stat)/1.6+"%"}}>
          <div className="bar" style={{backgroundColor:typeColor}}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
