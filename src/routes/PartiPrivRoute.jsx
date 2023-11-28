import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ThemeContext } from "../authContext/AuthContext";

const PartiPrivRoute = ({ children }) => {
  const { user, loading, userRole } = useContext(ThemeContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && userRole === "participant") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PartiPrivRoute;
