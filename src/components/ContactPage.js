import React from "react";
import MyAvatar from "../assets/1.jpg";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCardImage,
  MDBCardTitle,
} from "mdbreact";

const ContactPage = () => {
  return (
    <section id="Contact" className="my-5 container">
      <h2 className="h1-responsive font-weight-light text-center my-5">
        Contact
      </h2>

      <MDBRow id="contact">
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top"
              src={MyAvatar}
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Amir Hatam</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">
                DÉVELOPPEUR WEB FULL STACK
              </p>

              <MDBRow md="12" className="d-flex justify-content-center">
                <MDBCol className="p-0" md="3">
                  <MDBBtn
                    href={"https://www.linkedin.com/in/amir-hatam-7ba7601ba/"}
                    rounded
                    floating="true"
                    color="blue"
                    target="_blank"
                    title="Linkedin"
                  >
                    <MDBIcon size="lg" fab icon="linkedin-in" />
                  </MDBBtn>
                    
                  <p className="font-weight-light">Linkedin</p>

                </MDBCol>

                <MDBCol className="p-0" md="3">
                  <MDBBtn
                    href={"https://github.com/amirhatam"}
                    rounded
                    floating="true"
                    color="blue"
                    target="_blank"
                    title="GitHub"
                  >
                    <MDBIcon size="lg" fab icon="github"></MDBIcon>
                  </MDBBtn>
                  <p className="font-weight-light">GitHub</p>

                </MDBCol >
                <MDBCol className="p-0" md="3">
                  <MDBBtn
                    href={"https://youpic.com/photographer/AmirHatam/"}
                    rounded
                    floating="true"
                    color="blue"
                    target="_blank"
                    title="YouPic"
                  >
                    <i className="fab fa-yandex-international"></i>
                  </MDBBtn>
                  <p className="font-weight-light">YouPic</p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5246.268411398868!2d2.3147880552843096!3d48.893779442071015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fa907692ca9%3A0x25b27724e07e2cc6!2sPorte%20De%20Clichy!5e0!3m2!1sfr!2sfr!4v1622888103891!5m2!1sfr!2sfr"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Paris, France</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn
                href="tel:07 68 57 35 81"
                tag="a"
                floating="true"
                color="blue"
                className="accent-1"
              >
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>07 68 57 35 81</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn
                href="mailto:amirhatam136@gmail.com"
                tag="a"
                floating="true"
                color="blue"
                className="accent-1"
              >
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mb-md-0">amirhatam136@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default ContactPage;
