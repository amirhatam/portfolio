import React from "react";
import "./assets/ParallaxIntro.css";
import Competences from "./components/Competences.jsx";
import ContactPage from "./components/ContactPage";
import FooterPage from "./components/FooterPage";
import Header from "./components/Header.jsx";
import ProjectsPage from "./components/Projects";



class App extends React.Component {


  
  render() {
    return (
      <div>
        <Header />
        <ProjectsPage />
        <Competences />
        <ContactPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
