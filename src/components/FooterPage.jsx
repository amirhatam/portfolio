import React from "react";
import { MDBContainer,MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small text-center pt-4 mt-4">
      <MDBContainer fluid>
        <p className="text-white-50">
          Email :
          <a href="mailto:amirhatam136@gmail.com" className="text-dark">
            {" "}
            amirhatam136@gmail.com
          </a>
        </p>
        <p className="text-white-50">Disponible sur Paris et ses alentours</p>
        <p className="text-white-50 mb-0 pb-2">
          &copy; {new Date().getFullYear()} Amir Hatam, Tous droits réservés
        </p>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
