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
  return (
    <main className="font-spaceGrotesk">
      <RouterProvider router={router} />{" "}
    </main>
  );
};

export default App;
