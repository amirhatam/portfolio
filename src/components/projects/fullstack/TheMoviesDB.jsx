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
import Flip from 'react-reveal/Flip';
import Movies from "../../../assets/Images/screenshots/movies.png"

export const TheMoviesDB = () => {
    return (
        <MDBCard className="col-lg-5 col-8 p-3 mb-5 py-lg-5">
            <h4 className="h4-fs mb-lg-3 mb-1 fontW text-center ">The MoviesDB</h4>
            <p className="h6-fs mb-1 grey-text text-center">
                Projet personnel Cinématographiques
            </p>
            <Flip left duration={1000}>
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
            </Flip>
            <MDBCardBody className="pb-0">
                <h5 className="h6-fs fontW grey-text mb-lg-3 text-center">Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                </h5>
                <MDBRow>
                    <ul>
                        <li className="p-fs my-lg-3 ">
                            Informations et bande annonce de tous les films au cinéma en ce moment et ancien.
                        </li>
                        <li className="p-fs my-lg-3 "> Création de une liste favoris personnalisée.</li>
                        <li className="p-fs my-lg-3 ">API-Rest : <strong> TheMovieDB.org </strong></li>
                    </ul>
                </MDBRow>

                <MDBRow className="justify-content-center mt-lg-2 mt-4 mb-lg-4">
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

                <MDBRow className="">
                    <MDBCol size='12' className='text-center'>
                        <p className="p-fs mb-lg-3 mb-1">Date de realisation : <strong> Décembre/2021</strong> </p>
                    </MDBCol>
                    <MDBCol size='12' className='text-center'>
                        <MDBBtn
                            href={"https://github.com/amirhatam/Smartch"}
                            target="_blank"
                            className="rounded-pill"
                            color="mdb-color"
                            size="md"
                        >
                            <MDBIcon fab icon="github" className="fa-2x left icon-align-btn" /> Les Codes
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}