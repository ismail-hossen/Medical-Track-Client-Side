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
import NotFound from "../pages/NotFound";
import AvailableCamps from "../pages/AvailableCamps";
import OrgPRoute from "./OrgPRoute";
import PartiPrivRoute from "./PartiPrivRoute";
import FeedAndRatings from "../pages/dashboard/participant/FeedAndRatings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
        element: (
          <PrivateRoute>
            <AvailableCamps />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [
      // organizer routes
      {
        path: "manage-camps",
        element: (
          <PrivateRoute>
            <OrgPRoute>
              <ManageCamps />
            </OrgPRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-a-camp",
        element: (
          <PrivateRoute>
            <OrgPRoute>
              <AddACamp />
            </OrgPRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: (
          <PrivateRoute>
            <OrgPRoute>
              <ManageRegisteredCamps />
            </OrgPRoute>
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
            <PartiPrivRoute>
              <RegisteredCamps />
            </PartiPrivRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PartiPrivRoute>
              <PaymentHistory />
            </PartiPrivRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "feedback-and-ratings",
        element: (
          <PrivateRoute>
            <PartiPrivRoute>
              <FeedAndRatings />
            </PartiPrivRoute>
          </PrivateRoute>
        ),
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
