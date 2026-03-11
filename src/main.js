import { $ } from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { animate } from "./function.js";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let textSplitting = new SplitText(".hero h1", { type: "chars" });

  gsap.from(textSplitting.chars, {
    opacity: 0,
    y: -10,
    ease: "ease",
    duration: 0.5,
    stagger: {
      each: 0.05,
      from: "start",
    },
  });

  textSplitting = new SplitText(".hero p", { type: "chars" });

  gsap.from(textSplitting.chars, {
    opacity: 0,
    y: 10,
    ease: "ease",
    duration: 0.5,
    stagger: {
      each: 0.05,
      from: "start",
    },
  });

  animate(".about-me", ".element");
  animate(".section-experiences", ".element");
  animate(".section-project", ".element");
  animate(".skills", ".element");
});

const modeBtn = document.querySelector(".theme-div");
const root = document.documentElement;

$(modeBtn).on("click", function () {
  $(root).toggleClass("dark");

  if ($(root).hasClass("dark")) {
    $(modeBtn).addClass("dark-mode");
  } else {
    $(modeBtn).removeClass("dark-mode");
  }
});
