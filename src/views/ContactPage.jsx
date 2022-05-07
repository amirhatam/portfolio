import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBView,
  MDBContainer,
  MDBCardHeader,
} from "mdbreact";

import CodeWarsLogo from "../assets/Images/codewars.svg"
import "../assets/styles/contact.css";


const ContactPage = () => {

  return (
    <MDBView id="Contact" className="gray-container">
      <MDBContainer className="nav-space">
        <h1 className="titre-fs text-center font-light py-lg-5 pt-3">Contact</h1>

        <MDBRow className="justify-content-around">

          <MDBCol className="align-self-center col-lg-5 col-8 lg-0 mb-4">
            <MDBCard>
              <MDBCardHeader className="form-header text-center deep-blue-gradient rounded">
                <h3 className="my-3 text-white">
                  Contactez-moi <MDBIcon fab icon="telegram-plane" />
                </h3>
              </MDBCardHeader>
              <MDBCardBody className="mb-lg-3 px-sm-4 px-0" >
                <form action="https://formsubmit.co/amirhatam136@gmail.com" method="POST" className="px-3">
                  <div className="my-sm-3 my-2">
                    <input type="email" name="email" placeholder="Votre Email" required className="h6-fs form-control col" />
                  </div>
                  <div className="my-sm-3 my-2">
                    <input type="text" name="Nom" placeholder="Votre Nom" required className="h6-fs form-control col" />
                  </div>
                  <div className="my-sm-3 my-2">
                    <textarea rows="5" cols="33" type="text" name="message" placeholder="Commentaire" required className="h6-fs form-control col" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-info rounded-pill px-3 p-fs py-md-2 px-md-3 py-1 px-2  text-white" >Envoyer</button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="col-lg-5 col-8 mt-lg-0">
            <MDBRow className="justify-content-center">
              <div className="col-12">
                <h4 className="h4-fs text-center font-light mb-3 ">Coordonnées</h4>
              </div>
              <MDBCol className="col-lg-12 col-12">

                <MDBRow className="my-3">
                  <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                    <img
                      src={CodeWarsLogo}
                      alt=""
                      style={{ height: "2vmax" }}
                      className="img-fluid rounded "
                    />
                  </MDBCol>
                  <MDBCol className="col-md-10 col-8 align-self-center px-0">
                    <span className="fontW h5-fs ml-1">Codewars</span>
                  </MDBCol>
                  <MDBCol className="my-2">
                    <a href="https://www.codewars.com/users/AmirHatam"
                      target="_blank" rel="noreferrer"
                      className="txt-dark h6-fs"
                    >https://www.codewars.com/users/AmirHatam</a>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="my-3">
                  <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                    <MDBIcon fab icon="github" className="col-1 px-0 mr-1 h4-fs" />
                  </MDBCol>
                  <MDBCol className="col-md-10 col-8 align-self-center px-0">
                    <span className="fontW h5-fs ml-1">GitHub</span>
                  </MDBCol>
                  <MDBCol className="my-2">
                    <a href="https://github.com/amirhatam"
                      target="_blank" rel="noreferrer"
                      className="txt-dark h6-fs"
                    >https://github.com/amirhatam</a>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="my-3">
                  <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                    <MDBIcon fab icon="linkedin" className="col-1 px-0 mr-1 text-primary h4-fs" />
                  </MDBCol>
                  <MDBCol className="col-md-10 col-8 align-self-center px-0">
                    <span className="fontW h5-fs ml-1">LINKEDIN</span>
                  </MDBCol>
                  <MDBCol className="my-2">
                    <a href="https://www.linkedin.com/in/amir-hatam-7ba7601ba/"
                      target="_blank" rel="noreferrer"
                      className="li-ic txt-dark h6-fs">
                      https://www.linkedin.com/in/amir-hatam-7ba7601ba/
                    </a>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="my-3">
                  <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                    <MDBIcon icon="camera-retro" className="col-1 px-0 mr-1 text-muted h4-fs" />
                  </MDBCol>
                  <MDBCol className="col-md-10 col-8 align-self-center px-0">
                    <span className="fontW h5-fs ml-1">YouPic</span>
                  </MDBCol>
                  <MDBCol className="my-2">
                    <a href="https://youpic.com/photographer/AmirHatam/"
                      target="_blank" rel="noreferrer"
                      className="ins-ic txt-dark h6-fs">
                      https://youpic.com/photographer/AmirHatam/
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCol>

              <MDBCol className="col-lg-12 col-12">

                <MDBRow className="mb-3">
                  <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                    <MDBIcon icon="envelope" className="col-1 px-0 mr-lg-1 mr-2 text-muted h4-fs" />
                  </MDBCol>
                  <MDBCol className="col-md-10 col-8 align-self-center px-0">
                    <span className="fontW h5-fs ml-1">Email</span>
                  </MDBCol>
                  <MDBCol className="my-2">
                    <a href="mailto:amirhatam136@gmail.com"
                      className="d-block txt-dark h6-fs"
                    > amirhatam136@gmail.com</a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="my-3">
                  <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                    <MDBIcon icon="phone-alt" className="col-1 px-0 mr-1 text-info h4-fs" />
                  </MDBCol>
                  <MDBCol className="col-md-10 col-8 align-self-center px-0">
                    <span className="fontW h5-fs ml-1">Téléphone </span>
                  </MDBCol>
                  <MDBCol className="my-2">
                    <a href="tel:+33 7 68 57 35 81"
                      className="d-block txt-dark h6-fs"
                    >+33 7 68 57 35 81</a>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBRow>
        <MDBCol lg="12" className="px-lg-3">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?width=1000&amp;height=700&amp;hl=en&amp;q=Paris%2C%20France+(Titre)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>

        </MDBCol>
      </MDBRow>
    </MDBView >

  );
}

export default ContactPage;

