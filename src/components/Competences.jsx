import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  View,
} from "mdbreact";

const Competences = () => {
  return (
    <section className="gray-container">
      <MDBContainer>
        <section className="text-center mb-5">
          <h1 className="h1-responsive font-weight-light mb-5">Competences</h1>
          <MDBCarousel
            activeItem={1}
            slide={true}
            showControls={true}
            multiItem
            testimonial
            length={4}
            showIndicators={false}
          >
            <MDBCarouselInner >
              <MDBRow>
                <MDBCarouselItem className="cont-height" itemId="1">
                  <h2 className="font-weight-light blue-text my-5 mt-0">
                    Langages
                  </h2>
                  <MDBRow>
                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                        className="rounded-circle z-depth-1 img-fluid "
                        alt="Sample avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3 ">HTML.5</h5>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">CSS.3</h5>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://www.stimulsoft.com/images/products/reports-js/description/logo.svg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">JavaScript</h5>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://previews.123rf.com/images/imagevectors/imagevectors1603/imagevectors160300756/53026462-flat-noir-question-mark-ic%C3%B4ne-web-en-cercle-sur-fond-blanc.jpg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">...</h5>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>

                <MDBCarouselItem className="cont-height" itemId="2">
                  <h2 className="font-weight-light blue-text my-5 mt-0">
                    Front-End
                  </h2>
                  <MDBRow>
                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://miro.medium.com/max/1000/1*cPh7ujRIfcHAy4kW2ADGOw.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">
                        React.JS / React.Native
                      </h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://www.sofianewd.com/img/Jquery.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">JQuery</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://images.opencollective.com/material-ui/381e99c/logo/256.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">
                        Material-UI
                      </h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGrHjczVH1P8SQVYE1WOiRppbZYSitA4JWWpkQ0RsPtUMd-2kH7FiZhRbMTApw1xv0ec&usqp=CAU"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">MDB React</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://i2.wp.com/mareconversionpro.fr/wp-content/uploads/2017/05/bootstrap-logo.jpg?resize=300%2C300&ssl=1"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Bootstrap</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://previews.123rf.com/images/imagevectors/imagevectors1603/imagevectors160300756/53026462-flat-noir-question-mark-ic%C3%B4ne-web-en-cercle-sur-fond-blanc.jpg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">...</h5>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>

                <MDBCarouselItem className="cont-height" itemId="3">
                  <h2 className="font-weight-light blue-text my-5 mt-0">
                    Back-End
                  </h2>
                  <MDBRow>
                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="http://etiennevilledieu.fr/wp-content/themes/capitheme/img/logo-node.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Node.JS</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://img.icons8.com/color/452/mongodb.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">MongoDB</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://img2.freepng.fr/20180711/yfe/kisspng-express-js-node-js-javascript-mongodb-node-js-5b461d28173fc6.1251392115313216400952.jpg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Express</h5>
                    </MDBCol>
                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://avatars.githubusercontent.com/u/19378685?v=4&s=160"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Handlebars</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://toolynk.com/wp-content/uploads/2017/10/restApi580.png"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">REST</h5>
                    </MDBCol>

                    <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://previews.123rf.com/images/imagevectors/imagevectors1603/imagevectors160300756/53026462-flat-noir-question-mark-ic%C3%B4ne-web-en-cercle-sur-fond-blanc.jpg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                        style={{ width: "130px" }}
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">...</h5>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>

                <MDBCarouselItem className="cont-height" itemId="4">
                  <MDBCol className="m-auto" md="8">
                    <h2 className="font-weight-light blue-text my-5">Outils</h2>

                    <MDBTable>
                      <MDBTableBody>
                        <tr>
                          <th>
                            <img
                              src="https://e1.pngegg.com/pngimages/354/761/png-clipart-visual-studio-code-icon-redesign-for-macos-vscode-blue-and-white-logo.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://img2.freepng.fr/20180425/bxe/kisspng-github-repository-version-control-source-code-network-node-5ae13f80e99f63.3541394415247112969569.jpg"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>
                          <th>
                            <img
                              src="https://user-images.githubusercontent.com/17736615/30980083-f7f8a860-a43c-11e7-939e-f6717a2210fe.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th className="px-5">VSCode</th>

                          <th className="px-5">Postman</th>

                          <th className="px-5">Git</th>

                          <th className="px-5">Gitkraken</th>

                          <th>GitHub Desktop</th>
                        </tr>

                        <tr>
                          <th>
                            <img
                              src="https://cdn1.iconfinder.com/data/icons/ringtone-music-instruments/512/lambda-symbol-letter-greek-alphabet-2-512.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://www.drupal.org/files/issues/2019-12-11/heroku-logo-solid-purple_0.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://cdn1.iconfinder.com/data/icons/designer-skills/128/trello-512.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://1.bp.blogspot.com/-FHEoHVwdkKY/XIj6ufW5eKI/AAAAAAAAI2k/h9CAwSFM4rMvFTOKm6auS2UfuoU8aKPEgCK4BGAYYCw/s1600/logo%2Badobe%2Bphotoshop%2Bcc.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://e1.pngegg.com/pngimages/97/548/png-clipart-button-ui-microsoft-office-apps-red-and-white-logo.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>
                        </tr>

                        <tr>
                          <th className="px-5">Cmder</th>

                          <th className="px-5">Heroku</th>

                          <th className="px-5"> Trello</th>

                          <th>Adobe Photoshop</th>

                          <th>Microsoft Office</th>
                        </tr>

                        <tr>
                          <th>
                            <img
                              src="https://img.utdstc.com/icon/7fc/48e/7fc48e2459f50e85a3a611eae3362c08461fde2fc4692a6b0a312a00c6101aeb:200"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://japaniste.fr/wp-content/uploads/2019/12/discord-logo-logodownload-download-logotipos-1.png"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://previews.123rf.com/images/imagevectors/imagevectors1603/imagevectors160300756/53026462-flat-noir-question-mark-ic%C3%B4ne-web-en-cercle-sur-fond-blanc.jpg"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://previews.123rf.com/images/imagevectors/imagevectors1603/imagevectors160300756/53026462-flat-noir-question-mark-ic%C3%B4ne-web-en-cercle-sur-fond-blanc.jpg"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>

                          <th>
                            <img
                              src="https://previews.123rf.com/images/imagevectors/imagevectors1603/imagevectors160300756/53026462-flat-noir-question-mark-ic%C3%B4ne-web-en-cercle-sur-fond-blanc.jpg"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                              style={{ width: "50px" }}
                            />
                          </th>
                        </tr>

                        <tr>
                          <th className="px-5"> Slack</th>

                          <th className="px-5">Discord</th>

                          <th className="px-5">...</th>

                          <th className="px-5">...</th>

                          <th className="px-5">...</th>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCol>
                </MDBCarouselItem>
              </MDBRow>
              <h4 className="grey-text my-5">Je suis toutefois enthousiaste à l'idée d'apprendre de nouvelles technologies</h4>

              <View  className="my-5">
                <h3 className=" my-5">
                  J'ai choisi{" "}
                  <span className="blue-text font-weight-bold">React.JS</span>{" "}
                  pour mes projets car:
                </h3>
                <View className="row">
                  <View className="col p-5">
                    <h4 className="my-5">Le contenu est référençable</h4>
                    <p style={{ textAlign: "justify" }} className="grey-text">
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
                  </View>
                  <View className="col p-5">
                    <h4 className="my-5">ReactJS est très rapide</h4>
                    <p style={{ textAlign: "justify" }} className="grey-text">
                      ReactJS crée son propre DOM virtuel où sont rattachés vos
                      composants. Cette approche vous donne énormément de
                      flexibilité et des performances exceptionnelles, car
                      ReactJS calcule quel changement dans le DOM a besoin
                      d’être fait, et change juste LA PARTIE qui a besoin d’être
                      mise à jour. De cette façon, ReactJS évite des opérations
                      coûteuses dans le DOM.
                    </p>
                  </View>
                  <View className="col p-5">
                    <h4 className="my-5">Les composants sont le futur du développement web</h4>
                    <p style={{ textAlign: "justify" }} className="grey-text">
                      ReactJS à pris le concept de Shadow DOM et du framework
                      PolymerJS et l’a poussé à un niveau supérieur. React.js
                      n’utilise pas Shadow DOM – à la place il vous donne
                      l’habilité de créer vos propre composant que vous pourrez
                      réutiliser plus tard, combiner, et/ou inclure dans le cœur
                      de votre contenu. Cette fonctionnalité à elle seule est un
                      gage de productivité de par la facilité à définir et
                      manipuler vos propres composants.
                    </p>
                  </View>
                </View>
              </View>
            </MDBCarouselInner>
          </MDBCarousel>
        </section>
      </MDBContainer>
    </section>
  );
};

export default Competences;
