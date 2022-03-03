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
  MDBBtn
} from "mdbreact";
import "../assets/styles/Competences.css"
import Carousel from "../view/Slider";

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


const Competences = () => {



  return (
    <section className="gray-container" >
      <MDBContainer>
        <section className="my-lg-5 my-3">
          <h1 className="titre-fs text-center fontW py-lg-5 pt-3">Competences</h1>
          {/* <h4 className="grey-text mb-5">Je suis toutefois enthousiaste à l'idée d'apprendre de nouvelles technologies</h4> */}

          <MDBRow className="justify-content-start">
            <MDBCol className="col-12 ">
              <div className="" >
                <h5 className="h5-fs text-center fontW ">Langages de programmation</h5>
              </div>
            </MDBCol>
            <MDBCol className="col-4 align-self-center ">
              <img
                src={languages}
                alt=""
                className="img-fluid rounded"
              />
            </MDBCol>
            <MDBCol className="col-6 align-self-center">
              <MDBRow className="justify-content-around text-center mb-3">
                {/* <MDBView hover zoom waves title="JavaScript" className="col-lg-2 col-3 logoContainer py-2">
                  <img
                    src={JS}
                    className="img-fluid"
                    alt=""
                  />
                  <MDBMask className="flex-center">
                  </MDBMask>
                </MDBView> */}

                <MDBView title="JavaScript" hover zoom waves className="col-lg-2 col-3 logoContainer py-2">
                  <img
                    src={JS}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Typescript" hover zoom waves className="col-lg-2 col-3 logoContainer py-2">
                  <img
                    src={TS}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="HTML.5" hover zoom waves className="col-lg-2 col-3 logoContainer py-2">
                  <img
                    src={HTML}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="CSS.3" hover zoom waves className="col-lg-2 col-3 logoContainer py-2">
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

          <MDBRow className="justify-content-end py-lg-3">
            <MDBCol className="col-12 ">
              <h5 className="h5-fs text-center fontW ">Front-End</h5>
            </MDBCol>
            <MDBCol className="col-6 align-self-center">
              <MDBRow className="justify-content-around text-center mb-lg-3">
                <MDBView title="React.JS / React.Native" hover zoom waves className="col-lg-2 col-3 logoContainer py-2">
                  <img
                    src={logoReact}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="JQuery" hover zoom waves className="col-lg-2 col-3 logoContainer py-2">
                  <img
                    src={logoJQuery}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Bootstrap" hover zoom waves className="col-lg-2 col-3 mt-lg-3 mt-1 logoContainer py-2">
                  <img
                    src={Bootstrap}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Material-UI" hover zoom waves className="col-lg-2 col-3 mx-2 mt-lg-2 mt-3 logoContainer py-2">
                  <img
                    src={Material}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="MDBReact" hover zoom waves className="col-lg-2 col-3 mt-lg-0 mt-1 px-0 px-0 logoContainer py-2">
                  <img
                    src={MDB}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-lg-4 col-6 align-self-center ">
              <img
                src={FRONT}
                alt=""
                className="img-fluid rounded "
              />
            </MDBCol>
          </MDBRow>

          <hr className="" />

          <MDBRow className="justify-content-start">
            <MDBCol className="col-12 py-lg-3">
              <h5 className="h5-fs text-center fontW ">Back-End</h5>
            </MDBCol>
            <MDBCol className="col-4 align-self-center">
              <img
                src={Backend}
                alt=""
                className="img-fluid rounded"
              />
            </MDBCol>
            <MDBCol className="col-6 align-self-center ">
              <MDBRow className="justify-content-around text-center ">
                <MDBView title="Node.JS" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 mx-lg-1 align-self-center logoContainer py-2">
                  <img
                    src={NodeJS}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Nest.JS" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1  align-self-center logoContainer py-2">
                  <img
                    src={NestJS}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="MongoDB" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer py-2">
                  <img
                    src={MongoDB}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Express" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer py-2">
                  <img
                    src={Express}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Mongoose" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer py-2">
                  <img
                    src={Mongoose}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Postman" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer py-2">
                  <img
                    src={Postman}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Robo 3t" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer py-2">
                  <img
                    src={Robo3t}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="Handlebars" hover zoom waves className="col-lg-2 col-3 my-lg-2 my-1 align-self-center logoContainer py-2">
                  <img
                    src={Handlebars}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="REST.Api" hover zoom waves className="col-lg-2 col-3 align-self-center logoContainer py-2">
                  <img
                    src={RestApi}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
                <MDBView title="NoSQL" hover zoom waves className="col-lg-2 col-3 mt-lg-2 mt-3 align-self-center logoContainer py-2">
                  <img
                    src={NoSQL}
                    alt=""
                    className="img-fluid rounded"
                  />
                  <MDBMask overlay="white-slight" className=" waves-light" />
                </MDBView>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="mb-lg-5" />

          <Carousel />

          <MDBCardBody className="pb-lg-5">
            <h3 className='h4-fs fontW text-center mb-lg-5 pt-lg-5 mb-4'>  J'ai choisi
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
        </section>
      </MDBContainer >
    </section >
  );
};

export default Competences;
