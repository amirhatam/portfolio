import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBMask,
  MDBView,
  MDBCardGroup,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import "../assets/styles/Competences.css"

import JS from "../assets/Images/js.svg"
import HTML from "../assets/Images/html.png"
import CSS from "../assets/Images/css.png"
import languages from "../assets/Images/languages.png"
import FRONT from "../assets/Images/front.png"
import logoReact from "../assets/Images/react.png"
import logoJQuery from "../assets/Images/jquery.png"
import Material from "../assets/Images/material-ui.png"
import MDB from "../assets/Images/mdb.png"
import Bootstrap from "../assets/Images/bootstrap.png"
import Backend from "../assets/Images/Backend.png"
import MongoDB from "../assets/Images/mongodb.png"
import NodeJS from "../assets/Images/node.png"
import Express from "../assets/Images/ex.jpg"
import Postman from "../assets/Images/postman.png"
import Robo3t from "../assets/Images/Robot3.png"
import Handlebars from "../assets/Images/Handlebars.png"
import RestApi from "../assets/Images/rest.png"
import Carousel from "./Slider";

const Competences = () => {



  return (
    <section className="gray-container" >
      <MDBContainer>
        <section className="my-lg-5 my-3">
          <h1 className="titre-fs text-center fontW py-lg-5 pt-3">Competences</h1>
          {/* <h4 className="grey-text mb-5">Je suis toutefois enthousiaste à l'idée d'apprendre de nouvelles technologies</h4> */}
          <MDBRow className="justify-content-start">
            <MDBCol className="col-4 align-self-center ">
              <img
                src={languages}
                alt=""
                className="img-fluid rounded"
              />
            </MDBCol>
            <MDBCol  className="col-8 align-self-center">
              <MDBRow className="mb-lg-4 mb-2">
                <div className="" >
                  <h5 className="h4-fs fontW mb-lg-4">Langages de programmation</h5>
                </div>
              </MDBRow>
              <MDBRow className="justify-content-around text-center mb-3">
                <MDBView title="JavaScript" hover cascade waves className="col-3 logoContainer">
                  <img
                    src={JS}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="HTML.5" hover cascade waves className="col-3 logoContainer">
                  <img
                    src={HTML}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="CSS.3" hover cascade waves className="col-3 logoContainer">
                  <img
                    src={CSS}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <hr className="" />

          <MDBRow className="justify-content-end">
            <MDBCol className="col-8 align-self-center">
              <MDBRow className="mb-lg-4 mb-3">
                <MDBCol className="">
                  <h5 className="h4-fs txt-end fontW ">Front-End</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-around text-center mb-lg-3">
                <MDBView title="React.JS / React.Native" hover cascade waves className="col-lg-2 col-3 logoContainer">
                  <img
                    src={logoReact}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="JQuery" hover cascade waves className="col-lg-2 col-3 logoContainer">
                  <img
                    src={logoJQuery}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Bootstrap" hover cascade waves className="col-lg-2 col-3 mt-lg-3 mt-1 logoContainer">
                  <img
                    src={Bootstrap}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Material-UI" hover cascade waves className="col-lg-2 col-3 mx-2 mt-lg-2 mt-3 logoContainer">
                  <img
                    src={Material}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="MDBReact" hover cascade waves className="col-lg-2 col-3 mt-3 logoContainer">
                  <img
                    src={MDB}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-4 align-self-center ">
              <img
                src={FRONT}
                alt=""
                className="img-fluid rounded "
              />
            </MDBCol>
          </MDBRow>

          <hr className="" />

          <MDBRow className="justify-content-start">
            <MDBCol  className="col-4 align-self-center">
              <img
                src={Backend}
                alt=""
                className="img-fluid rounded"
              />
            </MDBCol>
            <MDBCol className="col-8 align-self-center ">
              <MDBRow className="mt-lg-5 mb-lg-4 mb-3">
                <MDBCol >
                  <h5 className="h4-fs fontW ">Back-End</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-around text-center ">
                  <MDBView title="Node.JS" hover cascade waves className="col-lg-2 col-3 mx-lg-3 align-self-center logoContainer">
                    <img
                      src={NodeJS}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <MDBMask overlay="white-slight" className=" waves-light" />
                  </MDBView>
                  <MDBView title="MongoDB" hover cascade waves className="col-lg-2 col-3 mx-lg-3 align-self-center logoContainer">
                    <img
                      src={MongoDB}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <MDBMask overlay="white-slight" className=" waves-light" />
                  </MDBView>
                  <MDBView title="Express" hover cascade waves className="col-lg-2 col-3 mx-lg-3 align-self-center logoContainer">
                    <img
                      src={Express}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <MDBMask overlay="white-slight" className=" waves-light" />
                  </MDBView>
                  <MDBView title="Postman" hover cascade waves className="col-lg-2 col-3 mx-lg-3 align-self-center logoContainer">
                    <img
                      src={Postman}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <MDBMask overlay="white-slight" className=" waves-light" />
                  </MDBView>
                <MDBView title="REST.Api" hover cascade waves className="col-lg-2 col-3 mt-lg-2 mt-3 align-self-center logoContainer">
                  <img
                    src={RestApi}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Robo 3t" hover cascade waves className="col-lg-2 col-3 mt-lg-2 mt-3 align-self-center logoContainer">
                  <img
                    src={Robo3t}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Handlebars" hover cascade waves className="col-lg-2 col-3 mt-lg-2 mt-3 align-self-center logoContainer">
                  <img
                    src={Handlebars}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="mb-5" />

          <Carousel />

          <MDBCardBody className="pb-5">
            <h3 className='h4-fs fontW text-center mb-5 pt-md-3 pt-3'>  J'ai choisi
              <span className="blue-text h4-fs fontW"> React.JS </span>
              pour mes projets car :</h3>
            <MDBCardGroup>
              <MDBCard className="text-center mx-2 hoverable">
                <MDBCardBody>
                  <MDBCardTitle className="h6-fs my-5" tag="h6">
                    Le contenu est référençable
                  </MDBCardTitle>
                  <p className="text-muted p-fs text-justify px-4 text-box">
                    C’est LA fonctionnalité qui fait la différence par rapport
                    aux autres frameworks. Grâce à l’utilisation d’un serveur
                    Node, le code va pouvoir être généré côté client ET côté
                    serveur (un peu comme du PHP donc… tout en gardant les
                    avantages du Javascript !) à la différence des autres
                    frameworks JS traditionnels (Backbone.js, AngularJS,
                    Ember.js, etc.) qui de manière native exécutent le code
                    seulement côté client (dans le navigateur). Jusqu’à
                    présent il était obligatoire de faire passer un bot
                    (service gratuit ou payant) pour qu’il crée des fichiers
                    HTML référençables.
                  </p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="text-center mx-2 hoverable">
                <MDBCardBody>
                  <MDBCardTitle className="h6-fs  my-5" tag="h5">
                    ReactJS est très rapide</MDBCardTitle>
                  <p className="text-muted p-fs text-justify px-4 text-box">
                    ReactJS crée son propre DOM virtuel où sont rattachés vos
                    composants. Cette approche vous donne énormément de
                    flexibilité et des performances exceptionnelles, car
                    ReactJS calcule quel changement dans le DOM a besoin
                    d’être fait, et change juste LA PARTIE qui a besoin d’être
                    mise à jour. De cette façon, ReactJS évite des opérations
                    coûteuses dans le DOM.
                  </p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="text-center mx-2 hoverable ">
                <MDBCardBody>
                  <MDBCardTitle className="h6-fs  mt-5 mb-4 px-3" tag="h5">
                    Les composants sont le futur du développement web
                  </MDBCardTitle>
                  <p className="text-muted p-fs text-justify px-4 text-box">
                    ReactJS à pris le concept de Shadow DOM et du framework
                    PolymerJS et l’a poussé à un niveau supérieur. React.js
                    n’utilise pas Shadow DOM – à la place il vous donne
                    l’habilité de créer vos propre composant que vous pourrez
                    réutiliser plus tard, combiner, et/ou inclure dans le cœur
                    de votre contenu. Cette fonctionnalité à elle seule est un
                    gage de productivité de par la facilité à définir et
                    manipuler vos propres composants.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCardGroup>
          </MDBCardBody>

        </section>
      </MDBContainer >
    </section >
  );
};

export default Competences;
