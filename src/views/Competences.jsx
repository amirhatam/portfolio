import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBCardGroup,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

import "../assets/styles/Competences.css"
import Carousel from "../components/Slider";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';


import JS from "../assets/Images/js.svg"
import TS from "../assets/Images/Typescript.svg"
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
import NestJS from "../assets/Images/nestjs.png"
import Express from "../assets/Images/ex.jpg"
import Mongoose from "../assets/Images/mongoose.png"
import Postman from "../assets/Images/postman.png"
import Robo3t from "../assets/Images/Robot3.png"
import Handlebars from "../assets/Images/Handlebars.png"
import RestApi from "../assets/Images/rest.png"
import NoSQL from "../assets/Images/nosql.jpg"
import Responsive from "../components/Responsive";


const Competences = () => {



  return (
    <section className="gray-container" >
      <MDBContainer>
        {/* <section className="my-lg-5 my-3"> */}
        <h1 className="titre-fs text-center font-light py-lg-5 pt-3">Competences</h1>

        <Responsive />

        <MDBRow className="justify-content-start pt-3">
          <MDBCol className="col-12 ">
            <div className="" >
              <h5 className="h5-fs text-center fontW ">Langages de programmation</h5>
            </div>
          </MDBCol>
          <MDBCol className="col-4 align-self-center ">
            <Slide left duration={1000}>
              <img
                src={languages}
                alt=""
                className="img-fluid rounded"
              />
            </Slide>
          </MDBCol>
          <MDBCol className="col-6 align-self-center">
            <MDBRow className="justify-content-around text-center mb-3">
              <MDBView title="JavaScript" hover zoom className="col-lg-2 col-3 logoContainer border-radius-logo p-1">
                <a href="https://www.javascript.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={JS}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Typescript" hover zoom className="col-lg-2 col-3 logoContainer p-1">
                <a href="https://www.typescriptlang.org/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={TS}
                      alt=""
                      className="img-fluid"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="HTML.5" hover zoom className="col-lg-2 col-3 logoContainer border-radius-logo p-1">
                <a href="https://html.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={HTML}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="CSS.3" hover zoom className="col-lg-2 col-3 logoContainer border-radius-logo p-1">
                <a href="https://www.css3.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={CSS}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <hr className="" />

        <MDBRow className="justify-content-end py-lg-3">
          <MDBCol className="col-12 ">
            <h5 className="h5-fs text-center fontW ">Front-End</h5>
          </MDBCol>
          <MDBCol className="col-6 align-self-center">
            <MDBRow className="justify-content-around text-center mb-lg-3">
              <MDBView title="React.JS / React.Native" hover zoom className="col-lg-2 col-3 logoContainer border-radius-logo p-1">
                <a href="https://www.reactjs.org/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={logoReact}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="JQuery" hover zoom className="col-lg-2 col-3 logoContainer border-radius-logo p-1">
                <a href="https://jquery.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={logoJQuery}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Bootstrap" hover zoom className="col-lg-2 col-3 mt-lg-3 mt-1 logoContainer border-radius-logo p-1">
                <a href="https://getbootstrap.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Bootstrap}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Material-UI" hover zoom className="col-lg-2 col-3 mx-2 mt-lg-2 mt-3 logoContainer border-radius-logo p-1">
                <a href="https://mui.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Material}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="MDBReact" hover zoom className="col-lg-2 col-3 mt-lg-0 mt-1 px-0 px-0 logoContainer border-radius-logo p-1">
                <a href="https://mdbootstrap.com/docs/react/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={MDB}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
            </MDBRow>
          </MDBCol>
          <MDBCol className="col-lg-4 col-6 align-self-center ">
            <Slide right duration={1500}>
              <img
                src={FRONT}
                alt=""
                className="img-fluid rounded "
              />
            </Slide>
          </MDBCol>
        </MDBRow>

        <hr className="" />

        <MDBRow className="justify-content-start">
          <MDBCol className="col-12 py-lg-3">
            <h5 className="h5-fs text-center fontW ">Back-End</h5>
          </MDBCol>
          <MDBCol className="col-4 align-self-center">
            <Slide left duration={1500}>
              <img
                src={Backend}
                alt=""
                className="img-fluid rounded"
              />
            </Slide>
          </MDBCol>
          <MDBCol className="col-6 align-self-center ">
            <MDBRow className="justify-content-around text-center ">
              <MDBView title="Node.JS" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 mx-lg-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://nodejs.org/en/docs/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={NodeJS}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Nest.JS" hover zoom className="col-lg-2 col-3 my-lg-2 my-1  align-self-center logoContainer border-radius-logo p-1">
                <a href="https://docs.nestjs.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={NestJS}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="MongoDB" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://www.mongodb.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={MongoDB}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Express" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://expressjs.com" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Express}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Mongoose" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://mongoosejs.com/docs/guide.html" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Mongoose}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Postman" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://www.postman.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Postman}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Robo 3t" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://robomongo.org/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Robo3t}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="Handlebars" hover zoom className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://handlebarsjs.com/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={Handlebars}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="REST.Api" hover zoom className="col-lg-2 col-3 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://restfulapi.net/" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={RestApi}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
              <MDBView title="NoSQL" hover zoom className="col-lg-2 col-3 mt-lg-2 mt-3 align-self-center logoContainer border-radius-logo p-1">
                <a href="https://fr.wikipedia.org/wiki/NoSQL" target="_blank">
                  <Flip left duration={1500}>
                    <img
                      src={NoSQL}
                      alt=""
                      className="img-fluid border-radius-logo"
                    />
                  </Flip>
                </a>
              </MDBView>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="mb-lg-5" />

        <Carousel />

        <MDBCardBody className="pb-lg-5">
          <h3 className='h4-fs font-light text-center mb-lg-5 pt-lg-5 mb-4'>  J'ai choisi
            <span className="blue-text h4-fs fontW"> React.JS </span>
            pour mes projets car :</h3>
          <MDBCardGroup className="row justify-content-between">
            <MDBCard className="col-lg-4 col-12 text-center hoverable">
              <MDBCardBody className="">
                <MDBCardTitle className="h6-fs my-lg-5" tag="h6">
                  Le contenu est référençable
                </MDBCardTitle>
                <p className="text-muted p-fs text-justify text-box">
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
            <MDBCard className="col-lg-4 col-12 mx-lg-4 mx-1 text-center hoverable">
              <MDBCardBody className="">
                <MDBCardTitle className="h6-fs my-lg-5" tag="h5">
                  ReactJS est très rapide</MDBCardTitle>
                <p className="text-muted p-fs text-justify text-box">
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
            <MDBCard className="col-lg-4 col-12 text-center hoverable">
              <MDBCardBody className="">
                <MDBCardTitle className="h6-fs my-lg-5 px-3" tag="h5">
                  Les composants sont le futur du développement web
                </MDBCardTitle>
                <p className="text-muted p-fs text-justify  text-box">
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
        {/* </section> */}
      </MDBContainer >
    </section >
  );
};

export default Competences;
