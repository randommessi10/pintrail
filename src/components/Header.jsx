import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-container">
        <div className="left-group">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">PinTrail</h1>
          </Link>
          <Link to="/explore" className="nav-item">Explore</Link>
        </div>

        <div className="nav-group">
          <Link to="/add" className="nav-item">Add Destination</Link>
          <Link to="/saved" className="nav-item">Saved</Link>
          <Link to="/itineraries" className="nav-item">Itineraries</Link>

          <div className="profile-menu">
            <button className="profile-btn">
              <User className="icon" />
            </button>
            <div className="dropdown">
              <Link to="/profile" className="dropdown-item">
                <User className="icon-sm" />
                Profile
              </Link>
              <div className="dropdown-divider" />
              <button className="dropdown-item">
                <LogOut className="icon-sm" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
