import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBCard

} from "mdbreact";
import Azi from "../assets/Images/screenshots/Azimuto.png"
import Movies from "../assets/Images/screenshots/movies.png"
import MERN from "../assets/Images/mern.png"
import PDF from "../assets/ProjetAzimuto.pdf"

const ProjectsPage = () => {
  return (
    <section id="projects" className="container">
      {/* <MDBContainer className=""> */}
      <h1 className="titre-fs text-center fontW my-lg-5 my-3">Les projets FullStack</h1>

      <MDBCard className="py-lg-5 pt-4 mb-5 ">
        <MDBRow className="justify-content-center ">
          <MDBCol className="col-4">
            <h5 className="h5-fs fontW text-center">Bibliothèques & Frameworks</h5>
            <MDBRow className="justify-content-center my-lg-5 mt-4">
              <div className="col-5 ">
                <h6 className="h6-fs mb-lg-4 mb-3 fontW">Back-End :</h6>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Mongoose</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Bcryptjs</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Dotenv</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Multer</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express-validator</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Password-validator</p>
              </div>
              <div className="col-5 ">
                <h6 className="h6-fs mb-lg-4 mb-3 fontW">Front-End :</h6>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> MDBReact</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> MDBReact</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Axios</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> React-router-dom</p>
                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> React-scripts</p>
              </div>
            </MDBRow>
          </MDBCol>

          <MDBCol className="col-4 text-center">
            <div className="m-auto ">
              <h5 className="h5-fs fontW">Voici un lien vers le projet <MDBIcon far icon="hand-point-down" className="h5-fs" />
              </h5>
              <MDBBtn
                href={"https://projet-stage-azimuto.herokuapp.com/"}
                color="black"
                target="_blank"
                className="p-0"
              >
                <MDBView className="overlay  z-depth-1" waves>
                  <img
                    src={Azi}
                    alt=""
                    className="img-fluid"
                  />
                </MDBView>
              </MDBBtn>
            </div>
            <MDBCardBody className="p-lg-3 p-1">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">Azimuto</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">Le projet pendant mon stage</p>
              <img
                src={MERN}
                alt=""
                className="img-fluid"
              />
              <MDBBtn
                href={PDF}
                target="_blank"
                className="rounded-pill px-3 mt-lg-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon far icon="clone" className="left my-2" /> Les Slides
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol className="col-4">
            <div>
              <h5 className="h5-fs fontW text-center mb-lg-3 ">Objectif du stage</h5>
              <h6 className="h6-fs text-justify px-4">Pendant mon stage j'ai créé un site web statique et dynamique
                pour l'association Azimuto, dans ce projet j'ai créé les fonctionnalités pour que administrateur
                puisse modifier certaines parties de site web.
              </h6>
            </div>
            <div>
              <h5 className="h5-fs fontW text-center mt-lg-4 mt-3 mb-lg-3 ">Gestion de projets</h5>
              <h6 className="h6-fs text-justify px-4">En termes de gestion de projet,
                ce projet suit les principes de la méthodologie <strong className="text-primary"> Agile SCRUM </strong>
                , en faisant deux points par semaine.
              </h6>
            </div>
            <div className="mb-lg-0 mb-4">
              <h5 className="h5-fs fontW text-center mt-lg-4 mt-3">Déploiement</h5>
              <h6 className="h6-fs text-justify px-4">J'ai utilisé <strong className="text-success h6-fs"> MongoDB Atlas </strong> pour héberger la base de données MongoDB et, <strong className="text-secondary h6-fs"> Heroku </strong>
                pour le serveur Node.JS.
              </h6>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBCard>
      <MDBRow className="justify-content-center text-center">
        <MDBCol className="col-lg-6 col-8">
          <MDBCard className="p-3 mb-5 ">
            <h5 className="h5-fs fontW">Voici un lien vers le projet <MDBIcon far icon="hand-point-down" className="h5-fs" />
            </h5>
            <MDBBtn
              href={"https://the-movies-database.herokuapp.com/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay  z-depth-1" waves>
                <img
                  src={Movies}
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>
            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">The MoviesDB</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">
                Projet personnel Cinématographiques<br /> L'information sur les films
              </p>
              <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary"></i> React JS / API (themovieDB)</p>
              <p className="h6-fs mb-lg-3 mb-1"> Node.JS / Express / MongoDB</p>
              <MDBBtn
                href={"https://github.com/amirhatam/Smartch"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <hr />
      <h1 className="titre-fs text-center fontW my-lg-5 my-3">Les projets Front-End</h1>
      <MDBRow className="justify-content-center text-center">
        <MDBCol className="col-lg-4 col-8">
          <MDBCard className="p-3 mb-5 ">
            <MDBBtn
              href={"https://la-france.netlify.app/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay  z-depth-1" waves>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/60a13142a9d4862aea1f5fcb/screenshot_2021-05-16-14-50-57-0000.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>
            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">La France</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">Mon premier projet personnel <br /> L'information des départements de France</p>
              <p className="h6-fs mb-lg-3 mb-1">
                <i className="fab fa-html5 text-danger"></i> HTML / <i className="fab fa-css3-alt text-primary"></i> CSS / <i class="fab fa-js-square text-warning"></i> JS
              </p>
              <MDBBtn
                href={"https://github.com/amirhatam/la-france.io"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-lg-4 col-8">
          <MDBCard className="p-3 mb-5 ">
            <MDBBtn
              href={"https://concert-max-richter.netlify.app/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay  z-depth-1" waves>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/60b28a502f3747f62ffcdd30/screenshot_2021-05-29-18-40-49-0000.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>

            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW"> Événement</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet personnel E-marketing <br /> L'information d'un événement concert </p>
              <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary"></i> React JS / Material-UI</p>


              <MDBBtn
                href={"https://github.com/amirhatam/concert-max-richter"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>


        <MDBCol className="col-lg-4 col-8">
          <MDBCard className="p-3 mb-5 ">
            <MDBBtn
              href={"https://jeu-petit-chevaux.netlify.app/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay z-depth-1" waves>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/6087c4360e649bc91214af86/screenshot_2021-04-27-08-00-32-0000.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>
            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">Petits Chevaux</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet de groupe <br /> Créer un jeux vidéo <br /> Jeu des Petits Chevaux</p>
              <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary"></i> React JS</p>

              <MDBBtn
                href={"https://github.com/amirhatam/petits"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-lg-4 col-8">
          <MDBCard className="p-3 mb-5 ">
            <MDBBtn
              href={"https://movies-m-d.netlify.app/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay  z-depth-1" waves>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/60acf265616b8d0008e71441/screenshot_2021-05-25-12-50-11-0000.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>
            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">Movies</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">
                Projet personnel cinématographiques<br /> Liste des films
              </p>
              <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary"></i> React JS / API (movieDB)</p>
              <MDBBtn
                href={"https://github.com/amirhatam/moviedb"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-lg-4 col-8">
          <MDBCard className="p-3 mb-5 ">
            <MDBBtn
              href={"https://search-info-country.netlify.app/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay  z-depth-1" waves>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/60b2bab149cc9c0007331bdf/screenshot_2021-05-29-22-06-06-0000.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>
            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">Countries</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet personnel <br /> Images et informations de tous les pays du Monde</p>
              <p className="h6-fs mb-lg-3 mb-1"> <i className="fab fa-react text-primary"></i> React JS  / API / Material-UI</p>

              <MDBBtn
                href={"https://github.com/amirhatam/country"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-lg-4 col-8">
          <MDBCard className="p-3 mb-5 ">
            <MDBBtn

              href={"https://bakery-shop-react.netlify.app/"}
              color="black"
              target="_blank"
              className="p-0"
            >
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/60a6a42af92d67008edc9e14/screenshot_2021-05-20-18-03-36-0000.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBView>
            </MDBBtn>
            <MDBCardBody className="pb-0">
              <h4 className="h4-fs mb-lg-3 mb-1 fontW">Bakery</h4>
              <p className="h6-fs mb-lg-3 mb-1 grey-text">Exercice E-Shop de formation  <br /> Les achats des produits de boulangerie</p>
              <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary  mb-2"></i> React JS</p>

              <MDBBtn
                href={"https://github.com/amirhatam/bakery"}
                target="_blank"
                className="rounded-pill px-3"
                color="mdb-color"
                size="sm"
              >
                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* </MDBContainer> */}
    </section >

  );
};

export default ProjectsPage;
