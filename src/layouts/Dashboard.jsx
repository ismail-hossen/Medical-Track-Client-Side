import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { useContext } from "react";
import { ThemeContext } from "../authContext/AuthContext";
import ManageCamps from "../pages/dashboard/Organizer/ManageCamps";

const Dashboard = () => {
  const { userRole } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          {location?.pathname == "/dashboard" && userRole == "organizer" && (
            <ManageCamps />
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
