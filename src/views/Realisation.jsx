import React from "react";
import {
  MDBRow,
} from "mdbreact";

import { Azimuto } from "../components/projects/Azimuto";
import { TheMoviesDB } from "../components/projects/TheMoviesDB";
import { LaFrance } from "../components/projects/LaFrance";
import { Evenement } from "../components/projects/Evenement";
import { PetitsChevaux } from "../components/projects/PetitsChevaux";
import { Movies } from "../components/projects/Movies";
import { Countries } from "../components/projects/Countries";
import { Bakery } from "../components/projects/Bakery";


const ProjectsPage = () => {
  return (
    <section id="projects" className="container">
      <h1 className="titre-fs text-center fontW my-lg-5 my-3">Les projets FullStack</h1>

      <Azimuto />
      <TheMoviesDB />


      <hr />
      <h1 className="titre-fs text-center fontW my-lg-5 my-3">Les projets Front-End</h1>
      <MDBRow className="justify-content-center text-center">
        <LaFrance />

        <Evenement />
        <Countries />
        <Bakery />
        <Movies />
        <PetitsChevaux />
      </MDBRow>
    </section >

  );
};

export default ProjectsPage;
