import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Jet2 from "../assets/svgs/Jet2.svg";
import { sections, JetSvgs } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const GalleryWebsite = () => {
  const slider = useRef();

  useGSAP(() => {
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
  });

  return (
    <div className="min-h-screen bg-slate-400">
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
                  <div className="content absolute right-6 bottom-6 text-white w-1/4">
                    <h1 className="text-2xl mb-3">{section.header}</h1>
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
          className={`w-12 fixed opacity-50`}
          style={{
            transform: `scale(${svg.scale})`,
            top: `${svg.top}%`,
            left: `${svg.left}%`,
          }}
          alt=""
        />
      ))}
    </div>
    // </div>
  );
};

export default GalleryWebsite;
