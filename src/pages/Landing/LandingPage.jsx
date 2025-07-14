import {MapPin, Search, Heart, Globe, Users, ArrowRight, LogIn, UserPlus} from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "../../components/CountUp";
import "../../styles/LandingPage.css";

export default function LandingPage() {
  const user = JSON.parse(localStorage.getItem("pintrail-user"));
  return (
    <div className="landing-container">
      {/* === Hero Section === */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Your Next
            <span className="hero-highlight">Adventure</span>
          </h1>
          <p className="hero-subtitle">
            Explore amazing destinations and plan memorable journeys with PinTrail.
          </p>
          <div className="hero-buttons">
            <Link to="/explore" className="primary-btn">
              Start Exploring
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
          {!user ?<div className="auth-buttons">
            <Link to="/login" className="ghost-btn">
              <LogIn className="ghost-icon" />
              Sign In
            </Link>
            <Link to="/register" className="ghost-btn">
              <UserPlus className="ghost-icon" />
              Create Account
            </Link>
          </div> : null}
        </div>
      </section>

      {/* === Features Section === */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Choose PinTrail?</h2>
            <p className="features-subtitle">
              Everything you need to plan your perfect trip
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Search className="icon" style={{ color: "#4b003d" }} />
              </div>
              <h3 className="feature-title">Smart Discovery</h3>
              <p className="feature-text">
                Find destinations tailored to your interests with our intelligent
                search and filtering system.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Heart className="icon" style={{ color: "#4b003d" }} />
              </div>
              <h3 className="feature-title">Save & Organize</h3>
              <p className="feature-text">
                Create your personal collection of dream destinations and organize
                them for future trips.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MapPin className="icon" style={{ color: "#4b003d" }} />
              </div>
              <h3 className="feature-title">Interactive Maps</h3>
              <p className="feature-text">
                Visualize destinations on interactive maps and discover nearby
                attractions effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Stats Section === */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">
              <Globe className="icon" />
              <span className="stat-number">
                <CountUp from={0} to={75} duration={2} separator="," />
                +
              </span>
            </div>
            <p className="stat-label">Destinations Worldwide</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <Users className="icon" />
              <span className="stat-number">
                <CountUp from={0} to={120} duration={2} separator="," />
                +
              </span>
            </div>
            <p className="stat-label">Happy Travelers</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <Heart className="icon" />
              <span className="stat-number">
                <CountUp from={0} to={450} duration={2} separator="," />
                +
              </span>
            </div>
            <p className="stat-label">Destinations Saved</p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of travelers who trust PinTrail to discover their next
            adventure.
          </p>
          <Link to="/explore" className="primary-btn">
            Explore Destinations Now
            <ArrowRight className="btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}
