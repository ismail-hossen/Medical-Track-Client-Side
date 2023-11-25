import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CampDetails from "../pages/CampDetails";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <h1>login</h1>,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "camp-details/:campId",
        element: <CampDetails />,
      },
      {
        path: "available-camps",
        element: <h1>available camps</h1>,
      },
    ],
  },
]);
