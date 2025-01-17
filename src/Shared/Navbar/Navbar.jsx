import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Users Gallery
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user?.uid && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}

          {user?.uid ? (
            <>
              <li>
                <button
                  className="btn btn-accent text-white"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="btn btn-primary text-white">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
