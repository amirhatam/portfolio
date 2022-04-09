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

export const LaFrance = () => {
    return (
        <MDBCol className="col-lg-6 col-8">
            <MDBCard className="p-3 mb-5 py-lg-5">
                <h4 className="h4-fs mb-lg-3 mb-1 fontW">La France</h4>
                <p className="h6-fs mb-1 grey-text">Mon premier projet personnel</p>
                <Flip left duration={1000}>
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
                </Flip>
                <h5 className="p-fs fontW grey-text mt-lg-2">
                    Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                </h5>
                <MDBCardBody className="pb-0">
                    <p className="h6-fs mb-lg-3 mb-1 ">L'information des départements de France</p>
                    <p className="h6-fs mb-lg-3 mb-1 grey-text">
                        <i className="fab fa-html5 text-danger"></i> HTML / <i className="fab fa-css3-alt text-primary"></i> CSS / <i class="fab fa-js-square text-warning"></i> JS
                    </p>
                    <p className="p-fs mb-lg-3 mb-1">Date de realisation : <span className='h6-fs'> Décembre - 2020</span> </p>
                    <MDBBtn
                        href={"https://github.com/amirhatam/la-france.io"}
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
