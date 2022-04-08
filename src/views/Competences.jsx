import React from "react";
import { MDBContainer } from "mdbreact";

import "../assets/styles/Competences.css"
import Carousel from "../components/Slider";
import { LanguagesCard } from "../components/competences/LanguagesCard.jsx";
import ResponsiveCard from "../components/competences/ResponsiveCard";
import { FrontEndCard } from "../components/competences/FrontEndCard";
import { BackEndCard } from "../components/competences/BackEndCard";
import { FrameworkCard } from "../components/competences/FrameworkCard";



const Competences = () => {


  return (
    <section className="gray-container pb-md-4" >
      <MDBContainer>
        <h1 className="titre-fs text-center font-light py-lg-5 pt-3">Competences</h1>

        <ResponsiveCard />

        <hr className="" />

        <LanguagesCard />

        <hr className="" />

        <FrontEndCard />

        <hr className="" />

        <BackEndCard />

        <hr className="mb-lg-5" />

        <Carousel />

        <FrameworkCard />

      </MDBContainer >
    </section >
  );
};

export default Competences;
