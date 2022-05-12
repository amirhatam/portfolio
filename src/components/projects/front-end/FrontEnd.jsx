import React, { useState } from "react";
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

import HobbiesImg from '../../../assets/Images/Hobbies.png'
import Hangman from '../../../assets/Images/screenshots/hangman.png'




export default function FrontEnd() {

    const [projectList] = useState([

        {
            projectUrl: 'https://la-france.netlify.app/',
            img: 'https://d33wubrfki0l68.cloudfront.net/60a13142a9d4862aea1f5fcb/screenshot_2021-05-16-14-50-57-0000.png',
            projectName: 'La France',
            projectHeadline: 'Mon premier projet personnel',
            projectInfo: "L'information des départements de France",
            tools: ['HTML', 'CSS', 'JavaScript'],
            date: 'Décembre / 2020',
            githubUrl: 'https://github.com/amirhatam/la-france.io'
        },
        {
            projectUrl: 'https://hobbies-leisure.netlify.app/',
            img: ` ${HobbiesImg}`,
            projectName: 'Hobbies & Leisure',
            projectHeadline: "Projet personnel d'algorithmique",
            projectInfo: 'Different Calculatrices et jeux vidéos',
            tools: ['MDBReact', 'API (Dictionary API)', 'Material-UI'],
            date: 'Mars / 2022',
            githubUrl: 'https://github.com/amirhatam/loisir'
        },
        {
            projectUrl: 'https://concert-max-richter.netlify.app/',
            img: 'https://d33wubrfki0l68.cloudfront.net/60b28a502f3747f62ffcdd30/screenshot_2021-05-29-18-40-49-0000.png',
            projectName: 'Un Événement Musicaux',
            projectHeadline: "Projet personnel E-marketing",
            projectInfo: "L'information d'un événement consert de Max Richter",
            tools: ['React.JS', 'Material-UI'],
            date: 'May / 2021',
            githubUrl: 'https://github.com/amirhatam/concert-max-richter'
        },
        {
            projectUrl: 'https://game-the-hangman.netlify.app/',
            img: `${Hangman}`,
            projectName: 'Jeu du Pendu',
            projectHeadline: 'Projet personnel Jeu vidéo',
            projectInfo: 'Trouver un mot en devinant les lettres qui le composent',
            tools: ['MDBReact', 'API (The Movie Database)', 'Material-UI'],
            date: 'Mars / 2022',
            githubUrl: 'https://github.com/amirhatam/game-hangman'
        },
        {
            projectUrl: 'https://search-info-country.netlify.app/',
            img: 'https://d33wubrfki0l68.cloudfront.net/60b2bab149cc9c0007331bdf/screenshot_2021-05-29-22-06-06-0000.png',
            projectName: 'The Countries',
            projectHeadline: 'Projet personnel',
            projectInfo: 'Images et informations de tous les pays du Monde',
            tools: ['MDBReact', 'API (The Countries & Images Database)', 'Material-UI'],
            date: 'Décembre / 2021',
            githubUrl: 'https://github.com/amirhatam/country'
        },
        {
            projectUrl: 'https://bakery-shop-react.netlify.app/',
            img: 'https://d33wubrfki0l68.cloudfront.net/60a6a42af92d67008edc9e14/screenshot_2021-05-20-18-03-36-0000.png',
            projectName: 'The Bakery',
            projectHeadline: 'Projet E-Shop pendant la formation',
            projectInfo: "D'achat des produits boulangerie",
            tools: ['React.JS'],
            date: 'Juin / 2021',
            githubUrl: 'https://github.com/amirhatam/bakery'
        },
        {
            projectUrl: 'https://movies-m-d.netlify.app/',
            img: 'https://d33wubrfki0l68.cloudfront.net/60acf265616b8d0008e71441/screenshot_2021-05-25-12-50-11-0000.png',
            projectName: 'The Movies',
            projectHeadline: 'Projet personnel Cinématographiques',
            projectInfo: 'Informations tous les films au cinéma en ce moment et ancien',
            tools: ['MDBReact', 'API (The Movie Database)'],
            date: 'May / 2021',
            githubUrl: 'https://github.com/amirhatam/moviedb'
        },
        {
            projectUrl: 'https://jeu-petit-chevaux.netlify.app/',
            img: 'https://d33wubrfki0l68.cloudfront.net/6087c4360e649bc91214af86/screenshot_2021-04-27-08-00-32-0000.png',
            projectName: 'Des Petits Chevaux',
            projectHeadline: 'Projet de groupe pendant la formation',
            projectInfo: 'Jeu des Petits Chevaux. Nombre de joueurs : 2',
            tools: ['React.JS'],
            date: 'Avril / 2021',
            githubUrl: 'https://github.com/amirhatam/petits'
        },
    ])


    return (
        <MDBCardGroup>
            <MDBRow className="justify-content-around text-center">
                {
                    projectList.map((e, i) => {
                        return (
                            <MDBCard key={i} className="col-lg-5 col-8 px-0 mb-5">
                                <Flip left duration={1000}>
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

