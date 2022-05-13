import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdbreact";
import CodeWarsLogo from "../../assets/Images/codewars.svg"


export default function Coordonnees() {
    return (
        <MDBCol className="col-lg-5 col-8 mt-lg-0">
            <MDBRow className="justify-content-center">
                <div className="col-12">
                    <h4 className="h4-fs text-center font-light mb-3 ">Coordonnées</h4>
                </div>
                <MDBCol className="col-lg-12 col-12">

                    <MDBRow className="my-3">
                        <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                            <img
                                src={CodeWarsLogo}
                                alt=""
                                style={{ height: "2vmax" }}
                                className="img-fluid rounded "
                            />
                        </MDBCol>
                        <MDBCol className="col-md-10 col-8 align-self-center px-0">
                            <span className="fontW h5-fs ml-1">Codewars</span>
                        </MDBCol>
                        <MDBCol className="my-2">
                            <a href="https://www.codewars.com/users/AmirHatam"
                                target="_blank" rel="noreferrer"
                                className="txt-dark h6-fs"
                            >https://www.codewars.com/users/AmirHatam</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="my-3">
                        <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                            <MDBIcon fab icon="github" className="col-1 px-0 h4-fs" />
                        </MDBCol>
                        <MDBCol className="col-md-10 col-8 align-self-center px-0">
                            <span className="fontW h5-fs ml-1">GitHub</span>
                        </MDBCol>
                        <MDBCol className="my-2">
                            <a href="https://github.com/amirhatam"
                                target="_blank" rel="noreferrer"
                                className="txt-dark h6-fs"
                            >https://github.com/amirhatam</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="my-3">
                        <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                            {/* <MDBIcon fab icon="linkedin" className="col-1 px-0 mr-1 text-primary h4-fs" /> */}
                            <MDBIcon fab icon="linkedin-in" className='h4-fs text-primary' />
                        </MDBCol>
                        <MDBCol className="col-md-10 col-8 align-self-center px-0">
                            <span className="fontW h5-fs ml-1">LINKEDIN</span>
                        </MDBCol>
                        <MDBCol className="my-2">
                            <a href="https://www.linkedin.com/in/amir-hatam-7ba7601ba/"
                                target="_blank" rel="noreferrer"
                                className="li-ic txt-dark h6-fs">
                                https://www.linkedin.com/in/amir-hatam-7ba7601ba/
                            </a>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="my-3">
                        <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                            <MDBIcon icon="camera-retro" className="col-1 px-0 mr-1 text-muted h4-fs" />
                        </MDBCol>
                        <MDBCol className="col-md-10 col-8 align-self-center px-0">
                            <span className="fontW h5-fs ml-1">YouPic</span>
                        </MDBCol>
                        <MDBCol className="my-2">
                            <a href="https://youpic.com/photographer/AmirHatam/"
                                target="_blank" rel="noreferrer"
                                className="ins-ic txt-dark h6-fs">
                                https://youpic.com/photographer/AmirHatam/
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol className="col-lg-12 col-12">

                    <MDBRow className="mb-3">
                        <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                            <MDBIcon icon="envelope" className="col-1 text-muted h4-fs px-0" />
                        </MDBCol>
                        <MDBCol className="col-md-10 col-8 align-self-center px-0">
                            <span className="fontW h5-fs ml-1">Email</span>
                        </MDBCol>
                        <MDBCol className="my-2">
                            <a href="mailto:amirhatam136@gmail.com"
                                className="d-block txt-dark h6-fs"
                            > amirhatam136@gmail.com</a>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="my-3">
                        <MDBCol className="col-md-2 col-2 align-self-center pr-0">
                            <MDBIcon icon="phone-alt" className="col-1 px-0 text-info h4-fs" />
                        </MDBCol>
                        <MDBCol className="col-md-10 col-8 align-self-center px-0">
                            <span className="fontW h5-fs ml-1">Téléphone </span>
                        </MDBCol>
                        <MDBCol className="my-2">
                            <a href="tel:+33 7 68 57 35 81"
                                className="d-block txt-dark h6-fs"
                            >+33 7 68 57 35 81</a>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    )
}
