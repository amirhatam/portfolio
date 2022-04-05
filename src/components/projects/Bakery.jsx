import React from 'react'
import {
    MDBCol,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBCard
} from "mdbreact";

export const Bakery = () => {
    return (
        <MDBCol className="col-lg-4 col-8">
            <MDBCard className="p-3 mb-5 ">
                <p className="h6-fs mb-1 grey-text">Projet E-Shop pendant la formation</p>
                <MDBBtn
                    href={"https://bakery-shop-react.netlify.app/"}
                    color="black"
                    target="_blank"
                    className="p-0"
                >
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/60a6a42af92d67008edc9e14/screenshot_2021-05-20-18-03-36-0000.png"
                            alt=""
                            className="img-fluid"
                        />
                    </MDBView>
                </MDBBtn>
                <h5 className="p-fs fontW grey-text mt-lg-2">
                    Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                </h5>
                <MDBCardBody className="pb-0">
                    <h4 className="h4-fs mb-lg-3 mb-1 fontW">Bakery</h4>
                    <p className="h6-fs mb-lg-3 mb-1 ">Les achats des produits de boulangerie</p>
                    <p className="h6-fs mb-lg-3 mb-1 grey-text"><i className="fab fa-react text-primary  mb-2"></i> React JS</p>
                    <p className="p-fs mb-lg-3 mb-1">Date de realisation : <strong> Juin/2021</strong> </p>

                    <MDBBtn
                        href={"https://github.com/amirhatam/bakery"}
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