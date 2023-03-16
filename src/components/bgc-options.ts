import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  fullScreen: false,
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 80,
        duration: 2,
        opacity: 1,
        size: 6,
      },
    },
  },
  particles: {
    color: {
      value: "#000",
    },
    links: {
      blink: false,
      color: "#fff",
      consent: false,
      distance: 40,
      enable: true,
      opacity: 0.5,
      width: 2,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 400,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.5,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
  },
};

export default options;
