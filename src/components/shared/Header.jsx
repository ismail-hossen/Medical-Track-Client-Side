import { useContext } from "react";
import { ThemeContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Header({ className }) {
  const { user } = useContext(ThemeContext);
  const NavItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      {user?.email && (
        <li>
          <Link to="/available-camps">Available Camps</Link>
        </li>
      )}
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );

  return (
    <div className={`${className} navbar bg-base-100`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          MedicalTrack
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <Link
                to="/dashboard"
                className="btn-circle avatar items-center justify-center"
              >
                {user?.photoURL ? (
                  <img
                    alt="User Photo"
                    className="rounded-full"
                    src={user.photoURL}
                  />
                ) : (
                  <div className="w-5/6">
                    <FaUserCircle className="w-full h-full" />
                  </div>
                )}
              </Link>
            </label>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/signup" className="btn ml-2">
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
