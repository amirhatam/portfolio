import React, { Component } from 'react'
import { MDBView } from "mdbreact";
import Slider from "react-slick";
import "../assets/styles/Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <h5 className="text-center h4-fs fontW my-5">Les Outils</h5>
                <Slider  {...settings} className="row">
                    <div className="col-2 d-flex  px-0">
                        <div className="col-12">
                            <img
                                src={VSCode}
                                alt="VSCode"
                                className="col-1 mx-2 img-fluid rounded d-flex"
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">VSCode</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Git}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded d-flex"
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Git</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={GitDesk}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded d-flex"
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">GitHub Desktop</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Gitkraken}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Gitkraken</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Heroku}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Heroku</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Atlas}
                                alt=""
                                className="col-2 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">MongoDB Atlas</h4>
                        </div>
                    </div>

                    <div className="col-2 d-flex px-0">
                        <div className="col-12">
                            <img
                                src={Netlify}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Netlify</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Cmder}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Cmder</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Slack}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Slack</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Discord}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Discord</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Photoshop}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Photoshop</h4>
                        </div>
                        <div className="col-12">
                            <img
                                src={Office}
                                alt=""
                                className="col-1 mx-2 img-fluid rounded "
                            />
                            <h4 className="h5-fs mt-2 ml-3 text-center">Microsoft Office</h4>
                        </div>
                    </div>
                </Slider>
            </div>

        )
    }
}
