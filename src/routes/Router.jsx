import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import CampDetails from "../pages/CampDetails";
import Login from "../pages/Login";
import Dashboard from "../layouts/Dashboard";
import AddACamp from "../pages/dashboard/Organizer/AddACamp";
import ManageCamps from "../pages/dashboard/Organizer/ManageCamps";
import ManageRegisteredCamps from "../pages/dashboard/Organizer/ManageRegisteredCamps";
import RegisteredCamps from "../pages/dashboard/participant/RegisteredCamps";

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
        element: <Login />,
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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // organizer routes
      {
        path: "manage-camps",
        element: <ManageCamps />,
      },
      {
        path: "add-a-camp",
        element: <AddACamp />,
      },
      {
        path: "manage-registered-camps",
        element: <ManageRegisteredCamps />,
      },
      {
        path: "organizer-profile",
        element: <h3>Organizer profile</h3>,
      },
      // participant routes
      {
        path: "registered-camps",
        element: <RegisteredCamps />,
      },
      {
        path: "payment-history",
        element: <h3>payment-history</h3>,
      },
      {
        path: "feedback-and-ratings",
        element: <h3>feedback-and-ratings</h3>,
      },
      {
        path: "participant-profile",
        element: <h3>participant profile</h3>,
      },
    ],
  },
]);
