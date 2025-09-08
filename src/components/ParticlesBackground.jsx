// src/components/ParticlesBackground.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim"; // <--- यह लाइन सही होनी चाहिए

function ParticlesBackground({ isDarkMode }) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // कणों के लिए कॉन्फ़िगरेशन
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
            distance: 150,
            links: {
                opacity: 0.8,
            }
        }
      },
    },
    particles: {
      color: {
        value: isDarkMode ? ["#00BFFF", "#FFD700", "#FF6347", "#ADFF2F"] : ["#4A90E2", "#50E3C2", "#F5A623", "#BD10E0"],
      },
      links: {
        color: isDarkMode ? "#ffffff" : "#000000",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
    </div>
  );
}

export default ParticlesBackground;