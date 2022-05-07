import React from "react";
import {
  MDBCardGroup,
  MDBRow,
} from "mdbreact";

import { Azimuto } from "../components/projects/fullstack/Azimuto";
import { TheMoviesDB } from "../components/projects/fullstack/TheMoviesDB";
import { LaFrance } from "../components/projects/front-end/LaFrance";
import { MaxRichter } from "../components/projects/front-end/MaxRichter";
import { PetitsChevaux } from "../components/projects/front-end/PetitsChevaux";
import { Movies } from "../components/projects/front-end/Movies";
import { Countries } from "../components/projects/front-end/Countries";
import { Bakery } from "../components/projects/front-end/Bakery";
import { Hobbies } from "../components/projects/front-end/Hobbies";
import { Pendu } from "../components/projects/front-end/Pendu";
import { Argonautes } from "../components/projects/fullstack/Argonautes";


const ProjectsPage = () => {
  return (
    <section id="projects" className="container pb-md-4">
      <h1 className="titre-fs text-center font-light my-lg-5 my-3">Les projets FullStack</h1>
      <MDBCardGroup>
        <Azimuto />
        <MDBRow className="row justify-content-around">
          <TheMoviesDB />
          <Argonautes />
        </MDBRow>
      </MDBCardGroup>

      <hr />
      <h1 className="titre-fs text-center font-light my-lg-5 my-3">Les projets Front-End</h1>
      <MDBCardGroup >
        <MDBRow className="justify-content-around text-center">
          <LaFrance />
          <Hobbies />
          <MaxRichter />
          <Pendu />
          <Countries />
          <Bakery />
          <Movies />
          <PetitsChevaux />
        </MDBRow>
      </MDBCardGroup>
    </section >

  );
};

export default ProjectsPage;
