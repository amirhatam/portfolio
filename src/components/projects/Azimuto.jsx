import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard

} from "mdbreact";

import Azi from "../../assets/Images/screenshots/Azimuto.png"
import MERN from "../../assets/Images/mern.png"
import PDF from "../../assets/ProjetAzimuto.pdf"

export const Azimuto = () => {
    return (
        <MDBCard className="py-lg-5 py-4 pt-4 mb-5 ">
            <MDBRow className="justify-content-center ">
                <MDBCol className="col-12 text-center">
                    <h4 className="h4-fs mb-lg-3 mb-1 fontW ">Azimuto</h4>
                    <p className="h6-fs mb-1 grey-text">Le projet pendant mon stage</p>
                </MDBCol>
                <MDBCol className="col-lg-4 col-10 mt-lg-0 mt-4">
                    <h5 className="h5-fs fontW text-center">Bibliothèques & Frameworks</h5>
                    <img
                        src={MERN}
                        alt=""
                        className="img-fluid"
                    />
                    <MDBRow className="justify-content-center mt-lg-5 mt-4">
                        <div className="col-5 ">
                            <h6 className="h6-fs mb-lg-4 mb-3 fontW">Back-End :</h6>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Mongoose</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Bcryptjs</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Dotenv</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Multer</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Express-validator</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Password-validator</p>
                        </div>
                        <div className="col-5 ">
                            <h6 className="h6-fs mb-lg-4 mb-3 fontW">Front-End :</h6>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> MDBReact</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Bootstrap</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> Axios</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> React-router-dom</p>
                            <p className="p-fs mb-lg-3 mb-2 grey-text "><MDBIcon icon="arrow-alt-circle-down" /> React-scripts</p>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol className="col-lg-4 col-10 text-center">
                    <div className="m-auto ">
                        <MDBBtn
                            href={"https://projet-stage-azimuto.herokuapp.com/"}
                            color="black"
                            target="_blank"
                            className="p-0"
                        >
                            <MDBView className="overlay z-depth-1" waves>
                                <img
                                    src={Azi}
                                    alt=""
                                    className="img-fluid"
                                />
                            </MDBView>
                        </MDBBtn>
                        <h5 className="h6-fs fontW grey-text mt-lg-2">
                            Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                        </h5>
                    </div>

                </MDBCol>
                <MDBCol className="col-lg-4 col-10 mt-lg-0 mt-4">
                    <div>
                        <h5 className="h5-fs fontW text-center mb-lg-3 ">Objectif du stage</h5>
                        <h6 className="h6-fs text-justify px-4">Pendant mon stage j'ai créé un site web statique et dynamique
                            pour l'association Azimuto, dans ce projet j'ai créé les fonctionnalités pour que administrateur
                            puisse modifier certaines parties de site web.
                        </h6>
                    </div>
                    <div>
                        <h5 className="h5-fs fontW text-center mt-lg-4 mt-3 mb-lg-3 ">Gestion de projets</h5>
                        <h6 className="h6-fs text-justify px-4">En termes de gestion de projet,
                            ce projet suit les principes de la méthodologie <strong className="text-primary"> Agile SCRUM </strong>
                            , en faisant deux points par semaine.
                        </h6>
                    </div>
                    <div className="mb-lg-0 mb-4">
                        <h5 className="h5-fs fontW text-center mt-lg-4 mt-3">Déploiement</h5>
                        <h6 className="h6-fs text-justify px-4">J'ai utilisé <strong className="text-success h6-fs"> MongoDB Atlas </strong> pour héberger la base de données MongoDB et, <strong className="text-secondary h6-fs"> Heroku </strong>
                            pour le serveur Node.JS.
                        </h6>
                    </div>
                </MDBCol>
                <MDBCol className="text-center">
                    <MDBBtn
                        href={PDF}
                        target="_blank"
                        className="rounded-pill px-3 mt-lg-3"
                        color="mdb-color"
                        size="sm"
                    >
                        <MDBIcon far icon="clone" className="left my-2" /> Les Slides
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    )
}
