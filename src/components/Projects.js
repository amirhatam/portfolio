import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard

} from "mdbreact";
import Azi from "../assets/Images/Azimuto.PNG"
import MERN from "../assets/Images/mern.png"

const ProjectsPage = () => {
  return (
    <section id="projects" className="">
      <MDBContainer className="p-0">
        <h1 className="titre-fs text-center fontW my-lg-5 my-3">Le projet FullStack</h1>

        <MDBCard className="py-5 mb-5 ">
          <MDBRow className="justify-content-center ">

            <MDBCol className="col-4">
              <h5 className="h5-fs fontW text-center">Bibliothèques & Frameworks</h5>
              <MDBRow className="justify-content-center my-5">
                <div className="col-5 ">
                  <h6 className="h6-fs mb-4 fontW">Back-End :</h6>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Mongoose</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Bcryptjs</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Dotenv</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Multer</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express-validator</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Password-validator</p>
                </div>
                <div className="col-5 ">
                  <h6 className="h6-fs mb-4 fontW">Front-End :</h6>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> MDBReact</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> MDBReact</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Axios</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> React-router-dom</p>
                  <p className="p-fs grey-text "><MDBIcon icon="arrow-alt-circle-down" /> React-scripts</p>
                </div>
              </MDBRow>
            </MDBCol>

            <MDBCol className="col-4 text-center">
              <div className="m-auto ">
                <h5 className="h5-fs fontW">Voici un lien vers le projet <MDBIcon far icon="hand-point-down" className="h5-fs" />
                </h5>
                <MDBBtn
                  href={"https://azimuto.herokuapp.com/"}
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
              <MDBCardBody className="pb-0">
                <h4 className="h4-fs mb-lg-3 mb-1 fontW">Azimuto</h4>
                <p className="h6-fs mb-lg-3 mb-1 grey-text">Le projet pendant mon stage</p>
                <img
                  src={MERN}
                  alt=""
                  className="img-fluid"
                />
              </MDBCardBody>
            </MDBCol>
            <MDBCol className="col-4">
              <div>
                <h5 className="h5-fs fontW text-center mb-3">Objectif du stage</h5>
                <h6 className="h6-fs text-justify px-4">Pendant mon stage j'ai créé un site web statique et dynamique
                  pour l'association Azimuto, dans ce projet j'ai créé les fonctionnalités pour que administrateur
                  puisse modifier certaines parties de site web.
                </h6>
              </div>
              <div>
                <h5 className="h5-fs fontW text-center mt-4 mb-3">Gestion de projets</h5>
                <h6 className="h6-fs text-justify px-4">En termes de gestion de projet,
                  ce projet suit les principes de la méthodologie <strong className="text-primary"> Agile SCRUM </strong>
                  , en faisant deux points par semaine.
                </h6>
              </div>
              <div>
                <h5 className="h5-fs fontW text-center mt-4">Déploiement</h5>
                <h6 className="h6-fs text-justify px-4">J'ai utilisé <strong className="text-success h6-fs"> MongoDB Atlas </strong> pour héberger la base de données MongoDB et, <strong className="text-secondary h6-fs"> Heroku </strong>
                  pour le serveur Node.JS.
                </h6>
              </div>


            </MDBCol>
          </MDBRow>
        </MDBCard>



        <h1 className="titre-fs fontW my-lg-5 my-3">Les projets Front-End</h1>
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
                <p className="h6-fs mb-lg-3 mb-1 grey-text">Mon premier projet personnel</p>
                <p className="h6-fs mb-lg-3 mb-1">
                  <i className="fab fa-html5 text-danger"></i> HTML /{" "}
                  <i className="fab fa-css3-alt text-primary"></i> CSS{" "}
                </p>
                <MDBBtn
                  href={"https://github.com/amirhatam/la-france.io"}
                  target="_blank"
                  className="rounded-pill px-3"
                  color="mdb-color"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
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
                <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet E-marketing</p>
                <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/concert-max-richter"}
                  target="_blank"
                  className="rounded-pill px-3"
                  color="mdb-color"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
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
                <h4 className="h4-fs mb-lg-3 mb-1 fontW">Petits chevaux</h4>
                <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet en groupe</p>
                <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/petits"}
                  target="_blank"
                  className="rounded-pill px-3"
                  color="mdb-color"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
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
                  Projet Liste de bases de données cinématographiques
                </p>
                <p className="h6-fs mb-lg-3 mb-1">API  /<i className="fab fa-react text-primary"></i> React JS</p>
                <MDBBtn
                  href={"https://github.com/amirhatam/moviedb"}
                  target="_blank"
                  className="rounded-pill px-3"
                  color="mdb-color"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
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
                <h4 className="h4-fs mb-lg-3 mb-1 fontW">Search Countries</h4>
                <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet liste de base de données des pays du monde</p>
                <p className="h6-fs mb-lg-3 mb-1">API / <i className="fab fa-react text-primary"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/country"}
                  target="_blank"
                  className="rounded-pill px-3"
                  color="mdb-color"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
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
                <p className="h6-fs mb-lg-3 mb-1 grey-text">Projet E-marketing</p>
                <p className="h6-fs mb-lg-3 mb-1"><i className="fab fa-react text-primary mt-4 mb-2"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/bakery"}
                  target="_blank"
                  className="rounded-pill px-3"
                  color="mdb-color"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >

  );
};

export default ProjectsPage;
