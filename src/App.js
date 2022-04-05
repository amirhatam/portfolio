import React from "react";
import { Element } from 'react-scroll'

import "./assets/styles/styles.css";
import Competences from "./views/Competences.jsx";
import ContactPage from "./views/ContactPage";
import FooterPage from "./components/FooterPage";
import Header from "./components/Header.jsx";
import Presentation from "./views/Presentation";
import ProjectsPage from "./views/Realisation";
import Responsive from "./components/Responsive";



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

        {/* <Element name="Responsive">
          <Responsive />
        </Element> */}

        <Element name="Competences">
          <Competences />
        </Element>

        <Element name="ProjectsPage">
          <ProjectsPage />
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
