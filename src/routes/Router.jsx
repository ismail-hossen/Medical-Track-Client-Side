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
import PaymentHistory from "../pages/dashboard/participant/PaymentHistory";
import Profile from "../pages/dashboard/Profile";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <CampDetails />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <ManageCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "add-a-camp",
        element: (
          <PrivateRoute>
            <AddACamp />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: (
          <PrivateRoute>
            <ManageRegisteredCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "organizer-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // participant routes
      {
        path: "registered-camps",
        element: (
          <PrivateRoute>
            <RegisteredCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "feedback-and-ratings",
        element: <h3>feedback-and-ratings</h3>,
      },
      {
        path: "participant-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // professional routes
      {
        path: "professional-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
