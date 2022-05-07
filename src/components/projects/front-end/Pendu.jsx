import React from 'react'
import {
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";
import Hangman from '../../../assets/Images/screenshots/hangman.png'
import Flip from 'react-reveal/Flip';

export const Pendu = () => {
    return (
        <MDBCard className="col-lg-5 col-8 p-3 mb-5 py-lg-5">
            <h4 className="h4-fs mb-lg-3 mb-1 fontW">Jeu du Pendu</h4>
            <p className="h6-fs mb-1 grey-text">Projet personnel jeu vidéo</p>
            <Flip left duration={1000}>
                <MDBBtn
                    href={"https://game-the-hangman.netlify.app/"}
                    color="black"
                    target="_blank"
                    className="p-0"
                >
                    <MDBView className="overlay  z-depth-1" waves>
                        <img
                            src={Hangman}
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
                <p className="h6-fs mb-lg-3 mb-1 ">Trouver un mot en devinant les lettres qui le composent</p>
                <p className="h6-fs mb-lg-3 mb-1 grey-text"><i className="fab fa-react text-primary"></i> React JS / API / Material-UI</p>
                <p className="p-fs mb-lg-3 mb-1">Date de realisation : <span className='h6-fs'> Mars/2022</span> </p>
                <MDBBtn
                    href={"https://github.com/amirhatam/game-hangman"}
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
