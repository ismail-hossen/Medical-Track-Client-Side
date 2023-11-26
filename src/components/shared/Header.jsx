import { useContext } from "react";
import { ThemeContext } from "../../authContext/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const { user, logout } = useContext(ThemeContext);
  const navigate = useNavigate();

  const NavItems = (
    <>
      <li>
        <a>Home</a>
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

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="navbar bg-base-100">
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
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
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
