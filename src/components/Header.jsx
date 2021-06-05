import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
} from "mdbreact";
import CV from "../assets/CV.pdf";
import Particles from "react-particles-js";

class Header extends React.Component {


  
  render() {
 
    return (
      <div id="parallaxintro">
        <Router>
          <div>
            <MDBNavbar
              color="primary-color"
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
                  <MDBNavItem>
                    <MDBNavLink to="Accueil">Accueil</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="Présentation">Présentation</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="Réalisation">Réalisation</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="Compétences">Compétences</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="Contact">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="m-2">
                    <a className="white-text" href={CV} target="_blank">
                      Mon CV
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBContainer>
            </MDBNavbar>
          </div>
        </Router>
        <MDBView
          // src={'https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg'}
          fixed
          className="bg-dark"
        >
          <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          />

        
          <MDBCol
            style={{
              position: "absolute",
              top: "40%",
              right: "40%",
              width: "23%",
              height: "0px",
            }}
            md="12"
            className="mb-4 white-text text-center"
          >
            <h1 className="display-3 d-flex white-text font-weight-bold">
              Amir.
              <span className="indigo-text font-weight-bold"> HATAM</span>
            </h1>
            <h5 className="text-uppercase white-text font-weight-bold">
              Développeur Web Full Stack
            </h5>
          </MDBCol>
        </MDBView>

        <main className="gray-container">
          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
                <h1 className="mb-5">Présentation</h1>
                <p>
                  Dès le lycée, j’ai acquis des compétences en infographie
                  "Option Arts Plastiques" (Création d'images numériques
                  assistée par ordinateur), j’ai également suivi pendant un an
                  la formation Microsoft certified solution expert “MCSE” à
                  l’université. Il y a un an que j'ai commencé à apprendre le
                  developpement web, car c'est un domaine qui me passionne
                  depuis toujours. J'aime créer et avoir un résultat à la hauteur
                  de mes attentes. Souriant, bon vivant, sportif et sociable
                  j'apprécie être confronté à de nouveau challenge. Je suis un
                  travailleur acharné qui n'abandonne pas au premier obstacle.
                  Tout problèmes à sa solution et je suis la solution à votre
                  probleme.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Header;
