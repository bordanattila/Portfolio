import React from "react";
import NavigationBar from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact"
import './App.css';
import { Col, Row, Container, Image } from "react-bootstrap";

function App() {
       
  return (
    <>

<Container className="navbarSection">
        <NavigationBar >
        </NavigationBar>
      </Container>
      <Container className="homeSection">
        <Home></Home>
      </Container>
      <Container className="skillsSection">
        <Skills></Skills>
      </Container>
      <section id="projects">
      <Container className="projectsSection">
        <Projects></Projects>
      </Container>
      </section>
      <Container className="contactSection">
        <Contact></Contact>
      </Container>
      
    </>

  );
}

export default App;
