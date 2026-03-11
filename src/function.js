import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function getCSSVar(cssvar) {
  return cssStyle.getPropertyValue(cssvar);
}

export function animate(parent, child) {
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  timeline.to(child, {
    opacity: 1,
    y: 0,
    ease: "ease",
    duration: 0.5,
    stagger: {
      each: 0.1,
      from: "start",
    },
  });
}

export function setCSSVar(cssvar, value, parent = document.documentElement) {
  parent.style.setProperty(cssvar, value);
}
