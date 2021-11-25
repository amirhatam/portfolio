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
    <MDBContainer className="p-0">

      <section id="projects" className="text-center my-5 ">
        <h1 className="h1-responsive font-weight-light my-5">Mes travaux</h1>

        <MDBRow className="text-center">


          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
                <h4 className="font-weight-bold my-3"> Événement</h4>
                <p className="grey-text">Projet E-marketing</p>
                <p><i className="fab fa-react text-primary"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/concert-max-richter"}
                  target="_blank"
                  className="mb-5"
                  color="info"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>


          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
                <h4 className="font-weight-bold my-3">Jeu des petits chevaux</h4>
                <p className="grey-text">Projet en groupe</p>
                <p><i className="fab fa-react text-primary"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/petits"}
                  target="_blank"
                  className="mb-5"
                  color="info"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
                <h4 className="font-weight-bold my-3">La France</h4>
                <p className="grey-text">Mon premier projet personnel</p>
                <p>
                  <i className="fab fa-html5 text-danger"></i> HTML /{" "}
                  <i className="fab fa-css3-alt text-primary"></i> CSS{" "}
                </p>
                <MDBBtn
                  href={"https://github.com/amirhatam/la-france.io"}
                  target="_blank"
                  className="mb-5"
                  color="info"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
                <h4 className="font-weight-bold my-3">Movies</h4>
                <p className="grey-text">
                  Projet Liste de bases de données cinématographiques
                </p>
                <p>API  /<i className="fab fa-react text-primary"></i> React JS</p>


                <MDBBtn
                  href={"https://github.com/amirhatam/moviedb"}
                  target="_blank"
                  className="mb-5"
                  color="info"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
                <h4 className="font-weight-bold my-3">Search Countries</h4>
                <p className="grey-text">Projet liste de base de données des pays du monde</p>
                <p>API / <i className="fab fa-react text-primary"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/country"}
                  target="_blank"
                  className="mb-5"
                  color="info"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
                <h4 className="font-weight-bold my-3">Bakery</h4>
                <p className="grey-text">Projet E-marketing</p>
                <p><i className="fab fa-react text-primary mt-4 mb-2"></i> React JS</p>

                <MDBBtn
                  href={"https://github.com/amirhatam/bakery"}
                  target="_blank"
                  className="mb-5"
                  color="info"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left my-2" /> View les Codes
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>

  );
};

export default ProjectsPage;
