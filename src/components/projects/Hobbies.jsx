import React from 'react'
import {
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";

export const Hobbies = () => {
    return (
        <MDBCol className="col-lg-4 col-8">
            <MDBCard className="p-3 mb-5 ">
                <p className="h6-fs mb-1 grey-text">Projet personnel d'Algorithmique</p>
                <MDBBtn
                    href={"https://hobbies-leisure.herokuapp.com/"}
                    color="black"
                    target="_blank"
                    className="p-0"
                >
                    <MDBView className="overlay z-depth-1" waves>
                        <img
                            src="https://www.site-shot.com/cached_image/hrarpKuwEeyHcAJCrBEABA"
                            alt=""
                            className="img-fluid"
                        />
                    </MDBView>
                </MDBBtn>
                <h5 className="p-fs fontW grey-text mt-lg-2">
                    Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                </h5>

                <MDBCardBody className="pb-0">
                    <h4 className="h4-fs mb-lg-3 mb-1 fontW"> Hobbies & Leisure</h4>
                    <p className="h6-fs mb-lg-3 mb-1">Ensemble des calculators et jeux vidéo </p>
                    <p className="h6-fs mb-lg-3 mb-1 grey-text"><i className="fab fa-react text-primary"></i> React JS / Material-UI</p>
                    <p className="p-fs mb-lg-3 mb-1">Date de realisation : <strong> Mars/2022</strong> </p>
                    <MDBBtn
                        href={"https://github.com/amirhatam/loisir"}
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
