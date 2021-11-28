import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBMask, MDBView } from "mdbreact";

import RespoIMG from "../assets/Images/responsive.png"


export default function Responsive() {
    return (
        <MDBCardBody className="">
            <MDBRow className="">
                <MDBCol md="12" className="my-5">
                    <MDBCardBody cascade className="text-center">
                        <h5 className="h5-fs">
                            Compatible Mobile, Tablettes & P.C
                        </h5>
                        <h2 className="titre-fs fontW">Développement Web Responsive</h2>
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
    )
}
