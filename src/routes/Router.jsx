import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

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
        path: "camp-details/:campId",
        element: <h1>hello world</h1>,
      },
      {
        path: "available-camps",
        element: <h1>available camps</h1>,
      },
    ],
  },
]);
