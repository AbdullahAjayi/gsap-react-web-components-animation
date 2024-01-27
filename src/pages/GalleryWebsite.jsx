import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Jet1 from "../assets/svgs/Jet1.svg";
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
          scrub: 0,
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
        gsap.to(jet, {
          yPercent: jet.dataset.distance,
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
                <div className="inner relative flex flex-col justify-center min-[480px]:justify-normal sm:flex-none w-full h-full">
                  <div>
                    <img
                      src={section.image}
                      alt=""
                      className="w-full sm:h-screen sm:object-cover"
                    />
                  </div>
                  <div className="content h-1/3 overflow-y-auto sm:h-auto sm:absolute left-0 bottom-0 md:left-6 md:bottom-6 text-white md:w-1/2  md:bg-slate-500/60 p-3">
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
      {JetSvgs.map((svg, i) => (
        <img
          key={i}
          src={Jet1}
          className={`jet w-12 fixed opacity-20`}
          style={{
            transform: `scale(${svg.scale})`,
            top: `${svg.top}%`,
            left: `${svg.left}%`,
          }}
          alt="jet svg"
          data-distance={svg.distance}
        />
      ))}
    </div>
  );
};

export default GalleryWebsite;
