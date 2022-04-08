import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBMask, MDBView, MDBContainer } from "mdbreact";

import RespoIMG from "../../assets/Images/responsive.png"


export default function ResponsiveCard() {
    return (
        <MDBContainer>
            <MDBCardBody className="p-0">
                <MDBRow className="">
                    <MDBCol md="12" className="my-lg-5 my-3 px-0">
                        <MDBCardBody cascade className="text-center mb-lg-5 p-0">
                            <h5 className="h6-fs mb-lg-2 mb-1">
                                Compatible Mobile, Tablettes & P.C
                            </h5>
                            <h2 className="h5-fs fontW">Développement Web Responsive</h2>
                        </MDBCardBody>
                        <MDBView hover cascade waves className="col-6 m-auto">
                            <img
                                src={RespoIMG}
                                alt=""
                                className="col-4 img-fluid"
                            />
                            <MDBMask overlay="white-slight" className=" waves-light" />
                        </MDBView>

                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBContainer>
    )
}
