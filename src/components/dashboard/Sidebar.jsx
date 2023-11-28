import { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import OrganizerMenu from "./organizer/OrganizerMenu";
import OrganizerProfile from "./organizer/OrganizerProfile";
import { ThemeContext } from "../../authContext/AuthContext";
import ParticipantProfile from "./participant/ParticipantProfile";
import ParticipantMenu from "./menu/ParticipantMenu";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { userRole, logout } = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <Link to="/" className="block cursor-pointer p-4 font-bold">
            MedicalTrack
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link
              to="/"
              className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto"
            >
              MedicalTrack
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {userRole == "organizer" && <OrganizerMenu />}
              {userRole == "participant" && <ParticipantMenu />}
            </nav>
          </div>
        </div>
        <div>
          <hr />
          {userRole == "organizer" && <OrganizerProfile />}
          {userRole == "participant" && <ParticipantProfile />}
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
