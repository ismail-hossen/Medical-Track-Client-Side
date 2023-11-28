import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon, image }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
        }`
      }
    >
      {image ? (
        <div className="avatar">
          <div className="w-6 h-6 rounded-full">
            <img src={image} />
          </div>
        </div>
      ) : (
        <Icon className="w-5 h-5" />
      )}

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
