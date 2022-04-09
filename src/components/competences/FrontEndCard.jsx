import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBView,
} from "mdbreact";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import '../../assets/styles/Logos.css'

import FRONT from "../../assets/Images/front.png"
import logoReact from "../../assets/Images/react.png"
import logoJQuery from "../../assets/Images/jquery.png"
import Material from "../../assets/Images/material-ui.png"
import MDB from "../../assets/Images/mdb.png"
import Bootstrap from "../../assets/Images/bootstrap.png"

export const FrontEndCard = () => {
    return (
        <>
            <MDBRow className="justify-content-end py-lg-3">
                <MDBCol className="col-12 ">
                    <h5 className="h5-fs text-center lighter">Front-End</h5>
                </MDBCol>
                <MDBCol className="col-6 align-self-center">
                    <MDBRow className="justify-content-around text-center mb-lg-3">
                        <MDBView title="React.JS / React.Native" hover zoom className="col-lg-2 col-2 p-0 border-radius-logo">
                            <a href="https://www.reactjs.org/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={logoReact}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="JQuery" hover zoom className="col-lg-2 col-2 p-0 border-radius-logo">
                            <a href="https://jquery.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={logoJQuery}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Bootstrap" hover zoom className="col-lg-2 col-2 p-0 border-radius-logo">
                            <a href="https://getbootstrap.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Bootstrap}
                                            alt=""
                                            className="img-fluid border-radius-logo pt-md-2 pt-1"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Material-UI" hover zoom className="col-lg-2 col-2 p-0 border-radius-logo">
                            <a href="https://mui.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Material}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="MDBReact" hover zoom className="col-lg-2 col-2 p-0 border-radius-logo">
                            <a href="https://mdbootstrap.com/docs/react/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={MDB}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="col-4 align-self-center ">
                    <Slide right duration={1500}>
                        <img
                            src={FRONT}
                            alt=""
                            className="img-fluid rounded "
                        />
                    </Slide>
                </MDBCol>
            </MDBRow>
        </>
    )
}
