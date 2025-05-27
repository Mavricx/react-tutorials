import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Contact from "./components/Contact/Contact.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Github, { gitInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
        loader: gitInfoLoader,
      },
    ],
  },
]);

// const router=createBrowserRouter(createRoutesFromElements(
// <Route path='/' element={ <Layout />}>
//   <Route path="" element={<Home />} />
//   <Route path='about' element={<About />} />
//   <Route path='contact' element={<Contact />} />
//   </Route>)
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// RouterProvider is a component that provides the router to the application.
// createBrowserRouter is a function that creates a browser router.
// createRoutesFromElements is a function that creates routes from elements.
// Layout is a component that renders the layout of the application.
// Home, About, Contact, User, Github are components that render the respective pages.
// gitInfoLoader is a loader function that fetches data for the Github component.
// The router is created with the createBrowserRouter function, which takes an array of route objects.
// Each route object has a path, an element, and optionally a loader.