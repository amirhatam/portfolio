import React from 'react'
import {
    MDBCardGroup,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from "mdbreact";

export const FrameworkCard = () => {
    return (
        <>
            <MDBCardBody className="pb-lg-5">
                <h3 className='h4-fs font-light text-center mb-lg-5 pt-lg-5 mb-4'>Les Avantage D'utiliser
                    <span className="blue-text h4-fs fontW"> React </span>
                    :</h3>
                <MDBCardGroup className="row justify-content-between">
                    <MDBCard className="col-lg-4 col-12 text-center hoverable">
                        <MDBCardBody className="">
                            <MDBCardTitle className="h6-fs my-lg-5" tag="h6">
                                Le contenu est référençable
                            </MDBCardTitle>
                            <p className="text-muted p-fs text-justify text-box">
                                C’est LA fonctionnalité qui fait la différence par rapport
                                aux autres frameworks. Grâce à l’utilisation d’un serveur
                                Node, le code va pouvoir être généré côté client ET côté
                                serveur (un peu comme du PHP donc… tout en gardant les
                                avantages du Javascript !) à la différence des autres
                                frameworks JS traditionnels (Backbone.js, AngularJS,
                                Ember.js, etc.) qui de manière native exécutent le code
                                seulement côté client (dans le navigateur). Jusqu’à
                                présent il était obligatoire de faire passer un bot
                                (service gratuit ou payant) pour qu’il crée des fichiers
                                HTML référençables.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="col-lg-4 col-12 mx-lg-4 mx-1 text-center hoverable">
                        <MDBCardBody className="">
                            <MDBCardTitle className="h6-fs my-lg-5" tag="h5">
                                ReactJS est très rapide</MDBCardTitle>
                            <p className="text-muted p-fs text-justify text-box">
                                ReactJS crée son propre DOM virtuel où sont rattachés vos
                                composants. Cette approche vous donne énormément de
                                flexibilité et des performances exceptionnelles, car
                                ReactJS calcule quel changement dans le DOM a besoin
                                d’être fait, et change juste LA PARTIE qui a besoin d’être
                                mise à jour. De cette façon, ReactJS évite des opérations
                                coûteuses dans le DOM.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="col-lg-4 col-12 text-center hoverable">
                        <MDBCardBody className="">
                            <MDBCardTitle className="h6-fs my-lg-5 px-3" tag="h5">
                                Les composants sont le futur du développement web
                            </MDBCardTitle>
                            <p className="text-muted p-fs text-justify  text-box">
                                ReactJS à pris le concept de Shadow DOM et du framework
                                PolymerJS et l’a poussé à un niveau supérieur. React.js
                                n’utilise pas Shadow DOM – à la place il vous donne
                                l’habilité de créer vos propre composant que vous pourrez
                                réutiliser plus tard, combiner, et/ou inclure dans le cœur
                                de votre contenu. Cette fonctionnalité à elle seule est un
                                gage de productivité de par la facilité à définir et
                                manipuler vos propres composants.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </MDBCardBody>
        </>
    )
}
