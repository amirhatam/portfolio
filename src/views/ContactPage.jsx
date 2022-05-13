import React from "react";
import {
  MDBRow,
  MDBView,
  MDBContainer,
} from "mdbreact";

import "../assets/styles/contact.css";
import Form from "../components/contact/Form";
import GoogleMap from "../components/contact/GoogleMap";
import Coordonnees from "../components/contact/Coordonnees";


const ContactPage = () => {

  return (
    <MDBView id="Contact" className="gray-container">
      <MDBContainer className="nav-space">
        <h1 className="titre-fs text-center font-light py-lg-5 pt-3">Contact</h1>
        <MDBRow className="justify-content-around">
          <Form />
          <Coordonnees />
        </MDBRow>
      </MDBContainer>

      <GoogleMap />
    </MDBView >

  );
}

export default ContactPage;

