import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleCursor = () => {
    
  const particlesInit = async (main) => {
      try {
    await loadFull(main);
  } catch (error) {
    console.error("tsparticles load failed:", error);
  }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000" // Optional: remove this if you already have a background
        },
        particles: {
          number: { value: 0 }, // No default particles
          move: {
            enable: true,
            speed: 10,
            outMode: "destroy"
          },
          size: {
            value: { min: 1, max: 5 }
          },
          color: {
            value: "#00bfff" // Neon blue
          },
          opacity: {
            value: 1
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "trail"
            }
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                color: { value: "#00bfff" },
                move: { speed: 2 },
                size: {
                  value: 5,
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1
                  }
                },
                opacity: {
                  value: 0.5,
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1
                  }
                }
              }
            }
          }
        }
      }}
    />
  );
};

export default ParticleCursor;