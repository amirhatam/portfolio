import React from 'react'
import {
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";

export const PetitsChevaux = () => {
    return (
        <MDBCol className="col-lg-4 col-8">
            <MDBCard className="p-3 mb-5 ">
                <p className="h6-fs mb-1 grey-text">Projet de groupe pendant la formation</p>
                <MDBBtn
                    href={"https://jeu-petit-chevaux.netlify.app/"}
                    color="black"
                    target="_blank"
                    className="p-0"
                >
                    <MDBView className="overlay z-depth-1" waves>
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/6087c4360e649bc91214af86/screenshot_2021-04-27-08-00-32-0000.png"
                            alt=""
                            className="img-fluid"
                        />
                    </MDBView>
                </MDBBtn>
                <h5 className="h6-fs fontW grey-text mt-lg-2">
                    Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                </h5>
                <MDBCardBody className="pb-0">
                    <h4 className="h4-fs mb-lg-3 mb-1 fontW">Petits Chevaux</h4>
                    <p className="h6-fs mb-lg-3 mb-1 ">Jeu des Petits Chevaux, nombre de joueurs : 2</p>
                    <p className="h6-fs mb-lg-3 mb-1 grey-text"><i className="fab fa-react text-primary"></i> React JS</p>
                    <p className="p-fs mb-lg-3 mb-1">Date de realisation : <strong> April/2021</strong> </p>
                    <MDBBtn
                        href={"https://github.com/amirhatam/petits"}
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
