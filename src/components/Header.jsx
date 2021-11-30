import { React, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { scroller } from 'react-scroll'
import { List, ListItem } from "@material-ui/core"

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavLink,
} from "mdbreact";
import CV from "../assets/CV.pdf";
import Canvas from "./Particles.jsx";

function Header() {

  const [collapsed, setCollapsed] = useState([false]);

  const handleTogglerClick = () => {
    setCollapsed(!collapsed)
  };

  const scrollToElement = (elem) => {
    scroller.scrollTo(elem, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  };
  return (
    <div id="parallaxintro">
      <Router>
        <MDBNavbar
          color="stylish-color"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer className="my-lg-3 my-md-3">
            <MDBNavbarBrand className="py-lg-1 pt-0">
              <strong className="white-text h5-fs">Amir Hatam</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav left >
              <List className="py-0 ">
                <ListItem className="d-inline mx-lg-3 mx-md-2 mx-1 px-0 py-1 white-text h6-fs" button onClick={() => scrollToElement("Header")}>
                  Accueil
                </ListItem>
                <ListItem className="d-inline mx-lg-3 mx-md-2 mx-1 px-0 py-1 white-text h6-fs" button onClick={() => scrollToElement("Presentation")}>
                  Presentation
                </ListItem>
                <ListItem className="d-inline mx-lg-3 mx-md-2 mx-1 px-0 py-1 white-text h6-fs" button onClick={() => scrollToElement("Competences")}>
                  Competences
                </ListItem>
                <ListItem className="d-inline mx-lg-3 mx-md-2 mx-1 px-0 py-1 white-text h6-fs" button onClick={() => scrollToElement("ProjectsPage")}>
                  Réalisation
                </ListItem>
                <ListItem className="d-inline mx-lg-3 mx-md-2 mx-1 px-0 py-1 white-text h6-fs" button onClick={() => scrollToElement("Contact")}>
                  Contact
                </ListItem>
              </List>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="d-flex col align-self-center ">
                <a className="h6-fs text-warning" href={CV} target="_blank">
                  Mon CV
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </Router>
      <MDBView
        fixed
        className="bg-dark height"
      >

        <Canvas inverted={+true} />

        <MDBContainer
          className="d-flex justify-content-center align-items-center"
        >
          <MDBRow>
            <MDBCol
              style={{
                position: "absolute",
                top: "30%",
                right: "34%",
                width: "31%",
              }}
              md="12"
              className="p-0 white-text text-center "
            >
              <h1 className="xlTitre-fs white-text fontW">
                Amir
                <span className="indigo-text fontW"> HATAM</span>
              </h1>
              <h5 className=" text-uppercase h4-fs white-text fontW">
                Développeur Web Full Stack
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
}

export default Header;
