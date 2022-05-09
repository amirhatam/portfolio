import React from 'react'
import {
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";
import Flip from 'react-reveal/Flip';

export const Countries = () => {
    return (
        <MDBCard className="col-lg-5 col-8 p-3 mb-5 py-lg-5">
            <h4 className="h4-fs mb-lg-3 mb-1 fontW">The Countries</h4>
            <p className="h6-fs mb-1 grey-text">Projet personnel</p>
            <Flip left duration={1000}>
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
            </Flip>
            <h5 className="p-fs fontW grey-text mt-lg-2">
                Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
            </h5>
            <MDBCardBody className="pb-0">
                <p className="h6-fs mb-lg-3 mb-1 ">Images et informations de tous les pays du Monde</p>
                <p className="h6-fs mb-lg-3 mb-1 grey-text"> <i className="fab fa-react text-primary"></i> React JS  / API / Material-UI</p>
                <p className="p-fs mb-lg-3 mb-1">Date de realisation : <span className='h6-fs'> Décembre / 2021</span> </p>
                <MDBBtn
                    href={"https://github.com/amirhatam/country"}
                    target="_blank"
                    className="rounded-pill"
                    color="mdb-color"
                    size="md"
                >
                    <MDBIcon fab icon="github" className="fa-2x left icon-align-btn" /> Les Codes
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}
