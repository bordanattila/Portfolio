import React, { useState, useEffect } from "react";
import NavigationBar from "./components/Navigation";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import PreLoader from "./components/PreLoader";
import "./components/styles/PreLoader.css";
import './App.css';

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <PreLoader />
  ) : (
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
