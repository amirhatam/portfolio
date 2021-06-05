import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
} from "mdbreact";
import CV from "../assets/CV.pdf";
// import Canvas from "./Particles.jsx";

class Header extends React.Component {


  // state = {
  //   collapsed: false,
  // };

  // handleTogglerClick = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };
  // componentDidMount() {
  //   document.querySelector("nav").style.height = "65px";
  // }
  // componentWillUnmount() {
  //   document.querySelector("nav").style.height = "auto";
  // }
  render() {
    // const overlay = (
    //   <div
    //     id="sidenav-overlay"
    //     style={{ backgroundColor: "transparent" }}
    //     onClick={this.handleTogglerClick}
    //   />
    // );

    // const { collapsed } = this.state;
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
                {/* <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar> */}
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
                {/* </MDBCollapse> */}
              </MDBContainer>
            </MDBNavbar>
            {/* {collapsed && overlay} */}
          </div>
        </Router>
        <MDBView
          src={'https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg'}
          fixed
          className="bg-dark"
        >
          {/* <Canvas inverted={+true}/> */}

          <MDBMask className="rgba-white-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "15rem" }}
          >
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
          </MDBContainer>
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
                  depuis toujours J'aime créer et avoir un résultat à la hauteur
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
