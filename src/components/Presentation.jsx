import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
} from "mdbreact";

export default function Presentation() {
    return (
        <div>
            <main className="gray-container py-lg-5 py-3">
                <h1 className="text-center titre-fs fontW mb-lg-5">Présentation</h1>
                <MDBContainer>
                    <MDBRow className="justify-content-center ">
                        <MDBCol className="col-8 text-center">
                            <p className="h6-fs font-weight-light text-justify">
                                Dès le lycée, j’ai acquis des compétences en infographie/design graphique,
                                à travers l’apprentissage de logiciels comme Photoshop par exemple,
                                j’ai suivi pendant un an la formation Microsoft Certified Solution Expert « MSCE » à l’université,
                                au cours de laquelle j’ai renforcé mes compétences techniques
                                concernant l’utilisation de server et l’administration des services réseau.
                                J’ai commencé à apprendre le développement web il y a deux ans,
                                car c'est un domaine qui me passionnedepuis toujours.
                                J'aime créer et avoir un résultat à la hauteur
                                de mes attentes. Souriant, bon vivant, sportif et sociable
                                j'apprécie être confronté à de nouveau challenge. Je suis un
                                travailleur acharné qui n'abandonne pas au premier obstacle.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main>
        </div>
    )
}
