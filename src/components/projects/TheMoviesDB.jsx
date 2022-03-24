import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";

import Movies from "../../assets/Images/screenshots/movies.png"

export const TheMoviesDB = () => {
    return (
        <MDBRow className="justify-content-center ">
            <MDBCol className="col-lg-6 col-8">
                <MDBCard className="p-3 mb-5 pt-lg-5">
                    <h4 className="h4-fs mb-lg-3 mb-1 fontW text-center m">The MoviesDB</h4>
                    <p className="h6-fs mb-lg-3 mb-1 grey-text text-center">
                        Projet personnel Cinématographiques<br /> L'information sur les films
                    </p>
                    <MDBBtn
                        href={"https://the-movies-database.herokuapp.com/"}
                        color="black"
                        target="_blank"
                        className="p-0"
                    >
                        <MDBView className="overlay z-depth-1" waves>
                            <img
                                src={Movies}
                                alt=""
                                className="img-fluid"
                            />
                        </MDBView>
                    </MDBBtn>
                    <MDBCardBody className="pb-0">
                        <h5 className="h5-fs fontW grey-text mb-lg-5 text-center">Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                        </h5>
                        <MDBRow className="justify-content-center my-lg-2 mt-4">
                            <div className="col-5 ">
                                <h6 className="h6-fs mb-lg-4 mb-3 fontW">Back-End :</h6>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Mongoose</p>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express</p>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Bcryptjs</p>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express-validator</p>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Password-validator</p>
                            </div>
                            <div className="col-5 ">
                                <h6 className="h6-fs mb-lg-4 mb-3 fontW">Front-End :</h6>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> MDBReact</p>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Bootstrap</p>
                                <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Axios</p>
                            </div>
                        </MDBRow>
                        <MDBRow className="justify-content-center">
                            <MDBBtn
                                href={"https://github.com/amirhatam/Smartch"}
                                target="_blank"
                                className="rounded-pill px-3"
                                color="mdb-color"
                                size="sm"
                            >
                                <MDBIcon fab icon="github" className=" left my-2" /> Les Codes
                            </MDBBtn>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}
