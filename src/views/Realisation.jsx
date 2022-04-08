import React from "react";
import {
  MDBRow,
} from "mdbreact";

import { Azimuto } from "../components/projects/Azimuto";
import { TheMoviesDB } from "../components/projects/TheMoviesDB";
import { LaFrance } from "../components/projects/LaFrance";
import { MaxRichter } from "../components/projects/MaxRichter";
import { PetitsChevaux } from "../components/projects/PetitsChevaux";
import { Movies } from "../components/projects/Movies";
import { Countries } from "../components/projects/Countries";
import { Bakery } from "../components/projects/Bakery";
import { Hobbies } from "../components/projects/Hobbies";
import { Pendu } from "../components/projects/Pendu";


const ProjectsPage = () => {
  return (
    <section id="projects" className="container pb-md-4">
      <h1 className="titre-fs text-center font-light my-lg-5 my-3">Les projets FullStack</h1>

      <Azimuto />

      <TheMoviesDB />

      <hr />
      <h1 className="titre-fs text-center font-light my-lg-5 my-3">Les projets Front-End</h1>
      <MDBRow className="justify-content-center text-center">
        <LaFrance />
        <Hobbies />
        <MaxRichter />
        <Pendu />
        <Countries />
        <Bakery />
        <Movies />
        <PetitsChevaux />
      </MDBRow>
    </section >

  );
};

export default ProjectsPage;
