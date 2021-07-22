import React from "react";
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
  MDBRow
} from "mdbreact";
import CV from "../assets/CV.pdf";
import Canvas from "./Particles.jsx";

function Header() {
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
        <div>
          <MDBNavbar
            color="unique-color"
            dark
            expand="md"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <a
                  href="https://www.linkedin.com/in/amir-hatam-7ba7601ba/"
                  target="_blank"
                >
                  <strong className="white-text">Amir Hatam</strong>
                </a>
              </MDBNavbarBrand>

              <MDBNavbarNav left>
                <List className="d-flex">
                  <ListItem className="white-text" button onClick={() => scrollToElement("Header")}>
                    Accueil
                  </ListItem>
                  <ListItem className="white-text" button onClick={() => scrollToElement("Presentation")}>
                    Presentation
                  </ListItem>
                  <ListItem className="white-text" button onClick={() => scrollToElement("ProjectsPage")}>
                    Réalisation
                  </ListItem>
                  <ListItem className="white-text" button onClick={() => scrollToElement("Competences")}>
                    Competences
                  </ListItem>
                  <ListItem className="white-text" button onClick={() => scrollToElement("Contact")}>
                    Contact
                  </ListItem>
                </List>
                <MDBNavItem className="col align-self-center ">
                  <a className="text-warning" href={CV} target="_blank">
                    Mon CV
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBContainer>
          </MDBNavbar>
        </div>
      </Router>
      <MDBView
        fixed
        className="bg-dark height"
      >

        <Canvas inverted={+true} />

        <MDBContainer
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", width: "100%" }}
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
              <h1 className="display-3 h1H white-text font-weight-bold">
                Amir
                <span className="indigo-text font-weight-bold"> HATAM</span>
              </h1>
              <h5 className=" text-uppercase h5H white-text font-weight-bold">
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
