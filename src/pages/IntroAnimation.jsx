import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const IntroAnimation = () => {
  const comp = useRef();
  const [introLoaded, setIntroLoaded] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ onComplete: () => setIntroLoaded(true) });
      tl.from("#intro-slider > h1", {
        opacity: 0,
        x: "+=30",
        stagger: 0.5,
      })
        .to("#intro-slider > h1", {
          opacity: 0,
          x: "-=30",
          delay: 0.3,
          stagger: 0.1,
        })
        .to(
          "#intro-slider",
          {
            yPercent: -100,
            duration: 0.8,
          },
          ">-.1"
        )
        .from("#welcome", {
          opacity: 0,
          y: "+=30",
          duration: 0.3,
        });
      const splitType = document.querySelectorAll(".reveal-text");

      splitType.forEach((char) => {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          opacity: 0.3,
          stagger: 0.5,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: comp }
  );

  useEffect(() => {
    let hashPresent = window.location.hash;
    // checks if hash is present
    let hashPresentDiv = hashPresent && document.querySelector(hashPresent);
    // scrolls to valid hash position on load
    if (hashPresentDiv && introLoaded) {
      window.scrollTo(0, hashPresentDiv.offsetTop);
    }

    const hashChange = () => {
      hashPresent = window.location.hash;
      hashPresentDiv = hashPresent && document.querySelector(hashPresent);
      // ensures the current valid hash postion is in view
      hashPresentDiv && window.scrollTo(0, hashPresentDiv.offsetTop);
    };

    if (!introLoaded) document.documentElement.style.overflowY = "hidden";
    else document.documentElement.style.overflowY = "scroll";

    window.addEventListener("hashchange", hashChange);

    return () => window.removeEventListener("hashchange", hashChange);
  }, [introLoaded]);

  return (
    <div ref={comp} className="relative">
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 fixed top-0 left-0 w-full z-10 flex flex-col gap-10 tracking-tight font-spaceGrotesk"
      >
        <h1 className="text-4xl">lorem ipsum </h1>
        <h1 className="text-4xl">dolor </h1>
        <h1 className="text-4xl">sit amet</h1>
        <h1 className="text-4xl">consectetur</h1>
      </div>
      <div className="h-screen flex justify-center place-items-center bg-gray-700 text-white">
        <h1 id="welcome" className="text-9xl font-bold font-spaceGrotesk">
          Welcome
        </h1>
      </div>
      <>
        <div
          id="section1"
          className="h-screen flex place-items-center p-5  bg-red-300 text-white"
        >
          <h1 className="reveal-text text-5xl">
            Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolorum, molestiae.
          </h1>
        </div>
        <div
          id="section2"
          className="h-screen flex place-items-center p-5  bg-yellow-300"
        >
          <h1 className="reveal-text text-5xl">
            Here goes some text. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam, modi.
          </h1>
        </div>
        <div
          id="section3"
          className="h-screen flex place-items-center p-5  bg-blue-300 text-white"
        ></div>
      </>
    </div>
  );
};

export default IntroAnimation;
