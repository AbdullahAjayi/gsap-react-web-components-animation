import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import { Home, IntroAnimation } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/intro-animation",
    element: <IntroAnimation />,
  },
]);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const App = () => {
  useEffect(() => {
    const getScrollPosition = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", getScrollPosition);

    return () => window.removeEventListener("scroll", getScrollPosition);
  }, []);

  return (
    <main className="font-spaceGrotesk">
      <RouterProvider router={router} />{" "}
    </main>
  );
};

export default App;
