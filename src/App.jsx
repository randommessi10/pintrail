import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/Landing/LandingPage";
import SavedPage from "./pages/Saved/SavedDestinations";
import AddDestinationPage from "./pages/AddDestination/AddDestinationPage";
import ItinerariesPage from "./pages/Itinerary/ItineraryPage";
import ViewItinerary from "./pages/Itinerary/ViewItinerary.jsx";
import ProfilePage from "./pages/Profile/ProfilePage";
import ExplorePage from "./pages/Explore/ExplorePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("pintrail-token"));

  // This ensures token is updated if set later (e.g., after login)
  useEffect(() => {
    const interval = setInterval(() => {
      const newToken = localStorage.getItem("pintrail-token");
      setToken(newToken);
    }, 500); // check every 500ms (you can tweak this)

    return () => clearInterval(interval);
  }, []);

  return (
    <HashRouter>
      <div className="page-wrapper">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={token ? <ExplorePage /> : <LoginPage />} />
            <Route path="/add" element={token ? <AddDestinationPage /> : <LoginPage />} />
            <Route path="/saved" element={token ? <SavedPage /> : <LoginPage />} />
            <Route path="/itineraries" element={token ? <ItinerariesPage /> : <LoginPage />} />
            <Route path="/itinerary/:id" element={token ? <ViewItinerary /> : <LoginPage />} />
            <Route path="/profile" element={token ? <ProfilePage /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
