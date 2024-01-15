import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IntroAnimation = () => {
  const comp = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.2,
      })
        .from("#intro-slider > h1", {
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
            xPercent: -100,
            duration: 1.3,
          },
          ">-.1"
        )
        .from("#welcome", {
          opacity: 0,
          y: "+=30",
          duration: 0.3,
        });
    },
    { scope: comp }
  );

  return (
    <div ref={comp} className="relative">
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 w-full z-10 flex flex-col gap-10 tracking-tight font-spaceGrotesk"
      >
        <h1 className="text-3xl">Software Engineer</h1>
        <h1 className="text-3xl">HardWare Dev</h1>
        <h1 className="text-3xl">Designer</h1>
        <h1 className="text-3xl">Avid Reader</h1>
      </div>
      <div className="h-screen flex justify-center place-items-center bg-gray-700 text-white">
        <h1 id="welcome" className="text-9xl font-bold font-spaceGrotesk">
          Welcome
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;
