import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

const styles = {
  btn: "bg-red-100 p-5 rounded-lg capitalize hover:bg-red-200 transition",
  box: "box w-fit p-3 bg-orange-400 cursor-pointer rounded-lg ",
  circle:
    "z-[1000] fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-40 p-3 flex justify-center w-16 h-16 items-center border-2 border-pink-100 cursor-pointer rounded-full pointer-events-none",
};

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, {
            x,
            y,
            delay,
          });
        },
      };
    },
    [delay]
  );

  return (
    <>
      <div className={`${styles.circle} ${size}`} ref={el}></div>
    </>
  );
});

const Cursor = () => {
  const circleRefs = useRef([]);

  circleRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach((ref) =>
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    );
    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => {
        ref.moveTo(clientX, clientY);
      });
    };
    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRefs = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };
  return (
    <>
      <Circle ref={addCircleRefs} size="sm" delay={0} />
      <Circle ref={addCircleRefs} size="md" delay={0.01} />
      {/* <Circle ref={addCircleRefs} size="lg" delay={0.02} /> */}
    </>
  );
};

export default Cursor;
