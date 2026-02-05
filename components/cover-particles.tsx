"use client";
import { memo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    init && (
      <div className="w-[0px]">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#3B82F6",
              },
              links: {
                color: "#3B82F6",
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 8, max: 10 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default memo(CoverParticles);
