import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBView,
} from "mdbreact";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import '../../assets/styles/Logos.css'

import JS from "../../assets/Images/js.png"
import TS from "../../assets/Images/Typescript.svg"
import HTML from "../../assets/Images/html.png"
import CSS from "../../assets/Images/css.png"
import languages from "../../assets/Images/languages.png"

export const LanguagesCard = () => {

    return (
        <>
            <MDBRow className="justify-content-start pt-3">
                <MDBCol className="col-12 ">
                    <div className="" >
                        <h5 className="h5-fs text-center lighter">Langages de programmation</h5>
                    </div>
                </MDBCol>
                <MDBCol className="col-4 align-self-center ">
                    <Slide left duration={1000}>
                        <img
                            src={languages}
                            alt=""
                            className="img-fluid rounded"
                        />
                    </Slide>
                </MDBCol>

                <MDBCol className="col-6 align-self-center">
                    <MDBRow className="justify-content-around text-center mb-3">
                        <MDBView title="JavaScript" hover zoom className="col-lg-2 col-2 p-0">
                            <a href="https://www.javascript.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <MDBView title="JavaScript" hover zoom className="p-1">
                                        <img
                                            src={JS}
                                            alt=""
                                            className="img-fluid "
                                        />
                                    </MDBView>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Typescript" hover zoom className="col-lg-2 col-2 p-0">
                            <a href="https://www.typescriptlang.org/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="p-1">
                                        <img
                                            src={TS}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="HTML.5" hover zoom className="col-lg-2 col-2 p-0">
                            <a href="https://html.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={HTML}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="CSS.3" hover zoom className="col-lg-2 col-2 p-0">
                            <a href="https://www.css3.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={CSS}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </>

    )
}
