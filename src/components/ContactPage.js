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
    <section id="Contact"  className="my-5 container">
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

              <MDBCol md="12" className="d-flex justify-content-center">
                <MDBBtn
                  href={"https://www.linkedin.com/in/amir-hatam-7ba7601ba/"}
                  rounded
                  floating="true"
                  color="info"
                  target="_blank"
                  title="Linkedin"
                >
                  <MDBIcon size="lg" fab icon="linkedin-in" />
                </MDBBtn>

                <MDBBtn
                  href={"https://github.com/amirhatam"}
                  rounded
                  floating="true"
                  color="info"
                  target="_blank"
                  title="GitHub"
                >
                  <MDBIcon size="lg" fab icon="github"></MDBIcon>
                </MDBBtn>

                <MDBBtn
                  href={"https://youpic.com/photographer/AmirHatam/"}
                  rounded
                  floating="true"
                  color="info"
                  target="_blank"
                  title="YouPic"
                >
                  <i className="fab fa-yandex-international"></i>
                </MDBBtn>
              </MDBCol>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11526.17969992383!2d2.308505240906459!3d48.88912850935417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1622499641775!5m2!1sfr!2sfr"
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
              <MDBBtn tag="a" floating="true" color="info" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Paris (75), France</p>
              <p className="mb-md-0"></p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn
                href="tel:07 68 57 35 81"
                tag="a"
                floating="true"
                color="info"
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
                color="info"
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
