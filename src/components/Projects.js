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

const ProjectsPage = () => {
  return (
    <section id="projects" className="text-center">
      <MDBContainer className="p-0">

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
    </section>

  );
};

export default ProjectsPage;
