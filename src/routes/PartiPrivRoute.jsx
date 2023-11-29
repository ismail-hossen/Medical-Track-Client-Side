import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { ThemeContext } from "../authContext/AuthContext";

const PartiPrivRoute = ({ children }) => {
  const { user, loading, userRole } = useContext(ThemeContext);
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user && userRole === "participant") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [user, userRole]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (authenticated) {
    return children;
  }

  const storedAuth = localStorage.getItem("authenticated");
  if (storedAuth === "true") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PartiPrivRoute;
