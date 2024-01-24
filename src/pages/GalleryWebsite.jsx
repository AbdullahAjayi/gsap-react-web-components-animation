import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Jet2 from "../assets/svgs/Jet2.svg";
import { sections, JetSvgs } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const GalleryWebsite = () => {
  const comp = useRef();
  const slider = useRef();

  useGSAP(
    () => {
      const sectionDivs = gsap.utils.toArray(".section");

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 2,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });

      tl.to(sectionDivs, {
        xPercent: -100 * (sections.length - 1),
      });

      sectionDivs.forEach((div, i) => {
        tl.from(div.querySelector(".content"), {
          yPercent: -50,
          scale: 0.8,
          opacity: 0,
          // scale: 0.5,
          scrollTrigger: {
            trigger: div.querySelector(".content"),
            start: "left center",
            end: "center center",
            containerAnimation: tl,
            scrub: true,
          },
        }).from(div.querySelector("img"), {
          opacity: 0,
          yPercent: -80,
          scrollTrigger: {
            trigger: div.querySelector("img"),
            start: "left right",
            end: "center, center",
            scrub: 2,
            containerAnimation: tl,
          },
        });
      });

      const jets = gsap.utils.toArray(".jet");

      jets.forEach((jet, i) => {
        console.log(jet.dataset.distance);
        gsap.to(jet, {
          xPercent: jet.dataset.distance,
          scrollTrigger: {
            scrub: 0.3,
          },
        });
      });
    },
    { scope: comp }
  );

  return (
    <div ref={comp} className="min-h-screen bg-black/80">
      <div className="outer overflow-x-hidden">
        <div
          ref={slider}
          style={{
            display: "flex",
            width: `${sections.length * 100}vw`,
          }}
        >
          {sections.map((section, key) => {
            return (
              <section key={key} className="section w-[100%] h-screen">
                <div className="inner relative w-full h-full">
                  <img src={section.image} alt="" className="w-full h-full" />
                  <div className="content absolute left-6 bottom-6 text-white w-1/3 bg-slate-500/60 p-3 rounded-lg">
                    <h1 className="text-2xl mb-3 capitalize">
                      {section.header}
                    </h1>
                    <p>{section.text}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      {/* <div className="jet-container fixed top-0 left-0 w-[100%] h-screen"> */}
      {JetSvgs.map((svg, i) => (
        <img
          key={i}
          src={Jet2}
          className={`jet w-12 fixed opacity-50`}
          style={{
            transform: `scale(${svg.scale})`,
            top: `${svg.top}%`,
            left: `${svg.left}%`,
          }}
          alt=""
          data-distance={svg.distance}
        />
      ))}
    </div>
    // </div>
  );
};

export default GalleryWebsite;
