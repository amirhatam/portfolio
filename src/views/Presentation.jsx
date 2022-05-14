import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCardText,
} from "mdbreact";
import CodeWars from '../components/CodeWars';


export default function Presentation() {
    return (
        <div>
            <main className="py-lg-5 py-3">
                <h1 className="text-center titre-fs font-light mb-lg-5">Présentation</h1>
                <MDBContainer>
                    <MDBRow className="justify-content-center ">
                        <MDBCol className="col-8">
                            <MDBCardText className="text-justify mb-0">
                                Dès le lycée, j’ai acquis des compétences en infographie/design graphique,
                                à travers l’apprentissage de logiciels comme Photoshop par exemple,
                                j’ai suivi pendant un an la formation Microsoft Certified Solution Expert « MSCE » à l’université,
                                au cours de laquelle j’ai renforcé mes compétences techniques
                                concernant l’utilisation de server et l’administration des services réseau.
                                <br />
                                Dans le domaine du développement web, j'ai suivi deux formations chez Konexio, cursus dans le cadre duquel
                                j'ai été amené à réaliser un stage au sein de l’association Azimuto.
                                Cette première expérience a été l’occasion de créer un site web statique et dynamique
                                de A à Z et m’a permis de communiquer directement avec le client et
                                de résoudre des challenges techniques en travaillant au-delà de mes apprentissages.
                                <br />
                                Grâce à mon stage et ces formations, j’ai acquis des compétences en programmation
                                web et web mobile solides qui me permettront de mettre mes capacités de création
                                au profit des missions proposées et je suis enthousiaste à l'idée d'apprendre
                                de nouvelles technologies.
                                <br />
                                J'aime créer et avoir un résultat à la hauteur
                                de mes attentes. Souriant, bon vivant, sportif et sociable
                                j'apprécie être confronté à de nouveau challenge. Je suis un
                                travailleur acharné qui n'abandonne pas au premier obstacle.
                            </MDBCardText>

                        </MDBCol>
                    </MDBRow>

                    <CodeWars />

                </MDBContainer>
            </main>
        </div >
    )
}
