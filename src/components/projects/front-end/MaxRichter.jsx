import React from 'react'
import {
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";
import Flip from 'react-reveal/Flip';

export const MaxRichter = () => {
    return (
        <MDBCard className="col-lg-5 col-8 p-3 mb-5 py-lg-5">
            <h4 className="h4-fs mb-lg-3 mb-1 fontW">Un Événement Msical</h4>
            <p className="h6-fs mb-1 grey-text">Projet personnel E-marketing</p>
            <Flip left duration={1000}>
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
            </Flip>
            <h5 className="p-fs fontW grey-text mt-lg-2">
                Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
            </h5>
            <MDBCardBody className="pb-0">
                <p className="h6-fs mb-lg-3 mb-1 ">L'information d'un événement consert de Max Richter </p>
                <p className="h6-fs mb-lg-3 mb-1 grey-text"><i className="fab fa-react text-primary"></i> React JS / Material-UI</p>
                <p className="p-fs mb-lg-3 mb-1">Date de realisation : <span className='h6-fs'> May/2021</span> </p>
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
    )
}
