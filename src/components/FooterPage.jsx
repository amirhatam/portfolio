import React from "react";
import { MDBCol, MDBContainer, MDBFooter, MDBRow, MDBIcon } from "mdbreact";
import "../assets/styles/Footer.css"

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color" className="font-small pt-lg-4 ">
      <MDBContainer >
        <MDBRow className="justify-content-center py-5">
          <MDBCol className="col-lg-7 col-6 mx-lg-0 mx-5">
            <h5 className="h5-fs ">DÉVELOPPEUR WEB FULLSTACK</h5>
            <p className="mb-lg-2 mb-1 p-fs">
              <strong> Développeur Web front & back-end</strong>,
              je suis à votre disposition pour répondre à tout type de projets
              de création de sites internet, de développement spécifique ou d'applications web.
            </p>
            <p className="p-fs">Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.</p>
          </MDBCol>
          <MDBCol className="ml-lg-auto col-lg-3 col-6">
            <h5 className="h6-fs fontW mb-lg-2 mb-0">Amir Hatam</h5>
            <div className="">
              <MDBIcon icon="map-marker-alt" className="col-1 p-fs px-0 txtGray" />
              <span className="fontW txtGray p-fs">Paris</span>
            </div>
            <div className="">
              <MDBIcon icon="envelope" className="col-1 txtGray p-fs px-0" />
              <a href="mailto:amirhatam136@gmail.com" className="txtGray aHover p-fs">
                amirhatam136@gmail.com
              </a>
            </div>
            <div className="">
              <MDBIcon icon="phone-alt" className="txtGray col-1 px-0 mr-1 f-fs p-fs" />
              <a href="tel:+33 7 68 57 35 81" className="txtGray aHover p-fs">+33 7 68 57 35 81</a>
            </div>
            <div className="">
              <MDBIcon fab icon="github" className="col-1 txtGray p-fs px-0" />
              <a href="https://www.facebook.com/assoazimuto/" target="_blank" rel="noreferrer" className="txtGray aHover p-fs">https://github.com/amirhatam</a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
