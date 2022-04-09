import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBView,
} from "mdbreact";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import '../../assets/styles/Logos.css'


import Backend from "../../assets/Images/Backend.png"
import MongoDB from "../../assets/Images/mongodb.png"
import NodeJS from "../../assets/Images/node.png"
import NestJS from "../../assets/Images/nestjs.png"
import Express from "../../assets/Images/ex.jpg"
import Mongoose from "../../assets/Images/mongoose.png"
import Postman from "../../assets/Images/postman.png"
import Robo3t from "../../assets/Images/Robot3.png"
import Handlebars from "../../assets/Images/Handlebars.png"
import RestApi from "../../assets/Images/rest.png"
import NoSQL from "../../assets/Images/nosql.png"

export const BackEndCard = () => {
    return (
        <>
            <MDBRow className="justify-content-start">
                <MDBCol className="col-12 py-lg-3">
                    <h5 className="h5-fs text-center lighter">Back-End</h5>
                </MDBCol>
                <MDBCol className="col-4 align-self-center">
                    <Slide left duration={1500}>
                        <img
                            src={Backend}
                            alt=""
                            className="img-fluid rounded"
                        />
                    </Slide>
                </MDBCol>
                <MDBCol className="col-6 align-self-center ">
                    <MDBRow className="justify-content-around text-center ">
                        <MDBView title="Node.JS" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 mx-lg-1 align-self-center border-radius-logo p-0">
                            <a href="https://nodejs.org/en/docs/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="col-md-11 col-10 border-radius-logo p-1">
                                        <img
                                            src={NodeJS}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Nest.JS" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center border-radius-logo p-1">
                            <a href="https://docs.nestjs.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={NestJS}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="MongoDB" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center border-radius-logo p-1">
                            <a href="https://www.mongodb.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={MongoDB}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Express" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center border-radius-logo p-1">
                            <a href="https://expressjs.com" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Express}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Mongoose" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center border-radius-logo p-1">
                            <a href="https://mongoosejs.com/docs/guide.html" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Mongoose}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Handlebars" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center border-radius-logo p-1">
                            <a href="https://handlebarsjs.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Handlebars}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Postman" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center border-radius-logo p-1">
                            <a href="https://www.postman.com/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Postman}
                                            alt=""
                                            className="img-fluid border-radius-logo"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="Robo 3t" hover zoom className="col-lg-2 col-2 my-lg-2 my-1 align-self-center p-1">
                            <a href="https://robomongo.org/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={Robo3t}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="NoSQL" hover zoom className="col-lg-2 col-2 align-self-center p-1">
                            <a href="https://fr.wikipedia.org/wiki/NoSQL" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={NoSQL}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </Flip>
                            </a>
                        </MDBView>
                        <MDBView title="REST.Api" hover zoom className="col-lg-2 col-2 align-self-center border-radius-logo p-1">
                            <a href="https://restfulapi.net/" target="_blank">
                                <Flip left duration={1500}>
                                    <div className="border-radius-logo p-1">
                                        <img
                                            src={RestApi}
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
