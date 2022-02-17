import React, { Component } from 'react'
import { MDBContainer, MDBView } from "mdbreact";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Slider.css";

import VSCode from "../assets/Images/vscode.png"
import Git from "../assets/Images/git.jpg"
import GitDesk from "../assets/Images/Github-desktop.svg"
import Gitkraken from "../assets/Images/Gitkraken.png"
import Heroku from "../assets/Images/Heroku.png"
import Atlas from "../assets/Images/MongoDB-Atlas.png"
import Netlify from "../assets/Images/netlify.png"
import Cmder from "../assets/Images/Cmder.png"
import Slack from "../assets/Images/Slack.png"
import Discord from "../assets/Images/Discord.png"
import Photoshop from "../assets/Images/Photoshop.png"
import Office from "../assets/Images/Office.png"



const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
};


export default class Carousel extends Component {

    render() {
        return (
            <div>
                <MDBContainer>
                    <h5 className="text-center h4-fs fontW my-lg-5">Les Outils</h5>
                    <Slider  {...settings} className="row">
                        <div className="col-2 d-flex px-0 py-lg-3 py-5">
                            <div className="col-12">
                                <img
                                    src={VSCode}
                                    alt="VSCode"
                                    className="imgMA mx-0 rounded"
                                />
                                <h4 className="h6-fs text-center mt-2 mx-0">VSCode</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Git}
                                    alt=""
                                    className="imgMA mx-0 rounded"
                                />
                                <h4 className="h6-fs text-center mt-2 mx-0">Git</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={GitDesk}
                                    alt=""
                                    className="imgMA mx-0 rounded"
                                />
                                <h4 className="h6-fs text-center mt-2 ">GitHub Desktop</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Gitkraken}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2">Gitkraken</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Heroku}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2">Heroku</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Atlas}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">MongoDB Atlas</h4>
                            </div>
                        </div>

                        <div className="col-2 d-flex px-0 py-lg-3 py-5">
                            <div className="col-12">
                                <img
                                    src={Netlify}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">Netlify</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Cmder}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">Cmder</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Slack}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">Slack</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Discord}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">Discord</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Photoshop}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">Photoshop</h4>
                            </div>
                            <div className="col-12">
                                <img
                                    src={Office}
                                    alt=""
                                    className="imgMA mx-0 rounded "
                                />
                                <h4 className="h6-fs text-center mt-2 ">Microsoft Office</h4>
                            </div>
                        </div>
                    </Slider>
                </MDBContainer >
            </div>

        )
    }
}
