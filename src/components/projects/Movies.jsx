import React from 'react'
import {
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";

export const Movies = () => {
    return (
        <MDBCol className="col-lg-4 col-8">
            <MDBCard className="p-3 mb-5 ">
                <p className="h6-fs mb-1 grey-text">
                    Projet personnel Cinématographiques
                </p>
                <MDBBtn
                    href={"https://movies-m-d.netlify.app/"}
                    color="black"
                    target="_blank"
                    className="p-0"
                >
                    <MDBView className="overlay  z-depth-1" waves>
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/60acf265616b8d0008e71441/screenshot_2021-05-25-12-50-11-0000.png"
                            alt=""
                            className="img-fluid"
                        />
                    </MDBView>
                </MDBBtn>
                <h5 className="h6-fs fontW grey-text mt-lg-2">
                    Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                </h5>
                <MDBCardBody className="pb-0">
                    <h4 className="h4-fs mb-lg-3 mb-1 fontW">Movies</h4>
                    <p className="h6-fs mb-lg-3 mb-1 ">
                        Informations tous les films au cinéma en ce moment et ancien
                    </p>
                    <p className="h6-fs mb-lg-3 mb-1 grey-text"><i className="fab fa-react text-primary"></i> React JS / API (movieDB)</p>
                    <p className="p-fs mb-lg-3 mb-1">Date de realisation : <strong> May/2021</strong> </p>
                    <MDBBtn
                        href={"https://github.com/amirhatam/moviedb"}
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
