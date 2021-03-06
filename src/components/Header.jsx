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
  const [collapsed, setCollapsed] = useState(false);

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

            <MDBNavbarToggler
              onClick={() => setCollapsed(!collapsed)}
            />

            <MDBCollapse isOpen={collapsed} navbar>

              <MDBNavbarNav left className="">
                <List className=" py-0 " style={{ display: "contents" }}>
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
                    R??alisation
                  </ListItem>
                  <ListItem className="d-inline mx-lg-3 mx-md-2 mx-1 px-0 py-1 white-text h6-fs" button onClick={() => scrollToElement("Contact")}>
                    Contact
                  </ListItem>
                </List>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem className="">
                  <MDBNavLink className="h6-fs text-warning" to={CV} target="_blank">
                    Mon CV
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>

            </MDBCollapse>

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
              <h1 className="xlTitre-fs white-text font-light">
                Amir
                <span className="indigo-text font-light"> HATAM</span>
              </h1>
              <h5 className=" text-uppercase h4-fs white-text font-light">
                D??veloppeur Web Full Stack
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
}

export default Header;
