import React from "react";
import { Element } from 'react-scroll'

import "./assets/ParallaxIntro.css";
import Competences from "./components/Competences.jsx";
import ContactPage from "./components/ContactPage";
import FooterPage from "./components/FooterPage";
import Header from "./components/Header.jsx";
import Presentation from "./components/Presentation";
import ProjectsPage from "./components/Projects";



class App extends React.Component {


  render() {
    return (
      <div>
        <Element name="Header">
        <Header />
        </Element>

        <Element name="Presentation">
        <Presentation />
        </Element>

        <Element name="ProjectsPage">
          <ProjectsPage />
        </Element>

        <Element name="Competences">
          <Competences />
        </Element>

        <Element name="ContactPage">
          <ContactPage />
        </Element>

        <FooterPage />

      </div>
    );
  }
}

export default App;
