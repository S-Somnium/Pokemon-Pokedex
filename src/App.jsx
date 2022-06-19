import React,{ useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./dist/main.css";
import NavbarPoke from "./components/navbar/NavbarPoke";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(()=>{
    if(localStorage.favorites === undefined){
      //setup initial cookie
      localStorage.setItem('favorites',JSON.stringify({}))
    }
  },[])
  return (
    <Router>
      <NavbarPoke />
      <Container className="content" fluid="xxl">
        <Row>
          <Col xxl className="pages">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
              <Route path="/pokemon/:pokemonId" element={<Detail />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
