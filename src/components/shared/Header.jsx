import { useContext } from "react";
import { ThemeContext } from "../../authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Header({ className }) {
  const { logout } = useContext(ThemeContext);
  const { user } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  const PrivNavItems = (
    <>
      <li>
        <Link to="/dashboard" className="justify-between">
          Dashboard
        </Link>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </>
  );
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
            className="menu menu-sm dropdown-content -left-2 z-[1] p-2 bg-base-100 w-52"
          >
            {NavItems}
            {user && PrivNavItems}
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          MedicalTrack
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
      <div className="hidden lg:flex navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img alt={user.displayName} src={user.photoURL} />
                ) : (
                  <FaUserCircle className="w-full h-full" />
                )}
              </div>
            </div>
            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              {PrivNavItems}
            </ul>
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
