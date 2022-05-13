import React from "react";
import {
    MDBCard,
    MDBCardTitle,
    MDBBtn,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardBody,
    MDBIcon,
    MDBRow,
} from "mdbreact";
import Flip from 'react-reveal/Flip';

import projectData from "./projectsData";




export default function FrontEnd() {

    return (
        <MDBCardGroup>
            <MDBRow className="justify-content-around text-center">
                {
                    // projectList.map((e, i) => {
                    projectData.map((e, i) => {
                        return (
                            <MDBCard key={i} className="col-lg-5 col-8 px-0 mb-5">
                                <Flip top duration={1000}>
                                    <MDBBtn
                                        href={e.projectUrl}
                                        color="black"
                                        target="_blank"
                                        className="p-0 m-0"
                                    >
                                        <MDBCardImage
                                            src={e.img}
                                            alt="MDBCard image cap" top hover
                                            overlay="white-slight"
                                        />
                                    </MDBBtn>
                                </Flip>

                                <h5 className="h6-fs fontW grey-text mt-lg-2">
                                    Voici un lien vers le projet <MDBIcon far icon="hand-point-up" className="h5-fs text-dark" />
                                </h5>

                                <MDBCardBody>
                                    <MDBCardTitle className="h4-fs mb-lg-0 mb-1 fontW">{e.projectName}</MDBCardTitle>
                                    <p className="h6-fs mb-lg-3 mb-1 grey-text">
                                        {e.projectHeadline}
                                    </p>
                                    <p className="grey-text p-fs mb-0">Date de réalisation   </p>
                                    <p className='h6-fs mb-lg-3 mb-1'> {e.date} </p>
                                    <MDBBtn
                                        href={e.githubUrl}
                                        target="_blank"
                                        className="rounded-pill mb-lg-4"
                                        color="mdb-color"
                                        size="sm"
                                    >
                                        <MDBIcon fab icon="github" className="fa-2x left icon-align-btn" /> Les Codes
                                    </MDBBtn>
                                    <MDBCardTitle className="block-example border-top border-light pt-4" tag="h5">Plus d'informations</MDBCardTitle>
                                    <MDBCardText className="mb-4">
                                        {e.projectInfo}
                                    </MDBCardText>

                                    {
                                        e.tools.map((t, l) => <p key={l} className="p-fs mb-lg-3 mb-2 grey-text mx-2"><MDBIcon icon="arrow-alt-circle-down" /> {t} </p>)
                                    }


                                </MDBCardBody>
                            </MDBCard>
                        )
                    })
                }

            </MDBRow>
        </MDBCardGroup>
    )
}

