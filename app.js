import React, { lazy, Suspense } from "react";
const ReactDOM = require("react-dom/client");

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import HeaderOtherElem from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/aboutUs";
import Offer from "./src/components/offers";
import Menu from "./src/components/Menu";
import Signup from "./src/components/signup";
import Profile from "./src/components/profile";
import Error from "./src/components/error";
import ShimmerUI from "./src/components/shimmerUI";
import ProfileClass from "./src/components/profileClass";

const InstaMart = lazy(() => {
  return import("./src/components/instamart");
});
// ;\restaurants\chicking-kuzhupalli-kavu-rd-perumbavoor-kochi-123179

const AppLayout = () => {
  return (
    <>
      <HeaderOtherElem key={"header"} /> <Outlet />
      <Footer key={"Footer"} />
    </>
  );
};

// console.log(id, useParams());

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={ShimmerUI()}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: <Offer />,
      },
      {
        path: "/:id",

        element: <Menu />,
      },
      { path: "/signUp", element: <Signup /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
