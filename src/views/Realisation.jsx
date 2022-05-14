import React from "react";
import {
  MDBCardGroup,
  MDBRow,
} from "mdbreact";

import { Azimuto } from "../components/projects/fullstack/Azimuto";
import { TheMoviesDB } from "../components/projects/fullstack/TheMoviesDB";
import { Argonautes } from "../components/projects/fullstack/Argonautes";

import FrontEnd from "../components/projects/front-end/FrontEnd";


const ProjectsPage = () => {
  return (
    <section id="projects" className="container pb-md-4">
      <h1 className="titre-fs text-center font-light my-lg-5 my-3">Des Projets FullStack</h1>
      <MDBCardGroup>
        <Azimuto />
        <MDBRow className="row justify-content-around">
          <TheMoviesDB />
          <Argonautes />
        </MDBRow>
      </MDBCardGroup>

      <hr />
      <h1 className="titre-fs text-center font-light my-lg-5 my-3">Des Projets Front-End</h1>

      <FrontEnd />
    </section >

  );
};

export default ProjectsPage;
