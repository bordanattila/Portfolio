import React from "react";
import NavigationBar from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact";
import './App.css';

function App() {

  return (
    <>

      <section className="navbarSection">
        <NavigationBar >
        </NavigationBar>
      </section>
      <section className="homeSection">
        <Home></Home>
      </section>
      <section className="skillsSection">
        <Skills></Skills>
      </section>
      <section className="projectsSection">
        <Projects></Projects>
      </section>
      <section className="contactSection">
        <Contact></Contact>
      </section>

    </>

  );
}

export default App;
