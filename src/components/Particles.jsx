import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Canvas extends Component {
  render() {
    return (
      <>
        <Particles
        className="height"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </>
    );
  }
}
