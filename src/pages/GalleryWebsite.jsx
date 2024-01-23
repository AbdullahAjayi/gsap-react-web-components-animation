import Jet2 from "../assets/svgs/Jet2.svg";

import { sections, JetSvgs } from "../data/data";

const GalleryWebsite = () => {
  return (
    <div className="min-h-screen bg-slate-400">
      <div className="outer overflow-x-hidden">
        <div
          style={{
            width: `${sections.length * 100}vw`,
          }}
          className={`slider flex`}
        >
          {sections.map((section, key) => {
            return (
              <section key={key} className="w-[100%] h-screen">
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
          style={{
            transform: `scale(${svg.scale})`,
            top: `${svg.top}%`,
            left: `${svg.left}%`,
          }}
          className={`w-12 absolute opacity-50`}
          alt=""
        />
      ))}
    </div>
    // </div>
  );
};

export default GalleryWebsite;
