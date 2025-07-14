import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/Landing/LandingPage";
import SavedPage from "./pages/Saved/SavedDestinations";
import AddDestinationPage from "./pages/AddDestination/AddDestinationPage";
import ItinerariesPage from "./pages/Itinerary/ItineraryPage";
import ViewItinerary from "./pages/Itinerary/ViewItinerary.jsx"; // ✅ added
import ProfilePage from "./pages/Profile/ProfilePage";
import ExplorePage from "./pages/Explore/ExplorePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/add" element={<AddDestinationPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/itineraries" element={<ItinerariesPage />} />
            <Route path="/itinerary/:id" element={<ViewItinerary />} /> {/* ✅ added */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
