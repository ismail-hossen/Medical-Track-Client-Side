import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { useContext } from "react";
import { ThemeContext } from "../authContext/AuthContext";

const Dashboard = () => {
  const location = useLocation();
  const { userRole } = useContext(ThemeContext);
  console.log(location);
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          {location?.pathname == "/dashboard" && userRole == "organizer" && (
            <h3>manage camps</h3>
          )}
          {location?.pathname == "/dashboard" && userRole == "participant" && (
            <h3>registered camps</h3>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
