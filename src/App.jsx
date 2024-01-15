import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, IntroAnimation } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/intro-animation",
    element: <IntroAnimation />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
