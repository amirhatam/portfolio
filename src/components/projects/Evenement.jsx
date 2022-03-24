import React from 'react'
import {
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";

export const Evenement = () => {
    return (
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
    )
}
