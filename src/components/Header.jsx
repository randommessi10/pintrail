import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import "../styles/Header.css";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("pintrail-user"));
  const navigate = useNavigate();
  

  

  const handleLogout = () => {
    localStorage.removeItem("pintrail-token");
    localStorage.removeItem("pintrail-user");
    console.log("User logged out.");
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="header-container">
        <div className="left-group">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">PinTrail</h1>
          </Link>
          <Link
            to="/explore"
            className="nav-item"      
          >
            Explore
          </Link>
        </div>

        <div className="nav-group">
          <Link
            to="/add"
            className="nav-item"
          >
            Add Destination
          </Link>
          <Link
            to="/saved"
            className="nav-item"
          >
            Saved
          </Link>
          <Link
            to="/itineraries"
            className="nav-item"          
          >
            Itineraries
          </Link>

          {user ? <div className="profile-menu">
            <button className="profile-btn">
              <User className="icon" />
            </button>
            <div className="dropdown">
              <span className="dropdown-item">
                <User className="icon-sm" />
                {user?.name || "Profile"}
              </span>
              <div className="dropdown-divider" />
              <button className="dropdown-item" onClick={handleLogout}>
                <LogOut className="icon-sm" />
                Logout
              </button>
            </div>
          </div> : null}
        </div>
      </nav>
    </header>
  );
}
