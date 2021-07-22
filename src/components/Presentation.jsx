import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
  } from "mdbreact";

export default function Presentation() {
    return (
        <div>
            <main className="gray-container">
                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <h1 className="mb-5">Présentation</h1>
                            <p className="h4 font-weight-light text-justify">
                                Dès le lycée, j’ai acquis des compétences en infographie
                                "Option Arts Plastiques" (Création d'images numériques
                                assistée par ordinateur), j’ai également suivi pendant un an
                                la formation Microsoft certified solution expert “MCSE” à
                                l’université. Il y a un an que j'ai commencé à apprendre le
                                developpement web, car c'est un domaine qui me passionne
                                depuis toujours J'aime créer et avoir un résultat à la hauteur
                                de mes attentes. Souriant, bon vivant, sportif et sociable
                                j'apprécie être confronté à de nouveau challenge. Je suis un
                                travailleur acharné qui n'abandonne pas au premier obstacle.
                                Tout problèmes à sa solution et je suis la solution à votre
                                probleme.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main>
        </div>
    )
}
