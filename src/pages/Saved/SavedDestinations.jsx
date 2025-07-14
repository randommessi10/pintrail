import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import DestinationGrid from "../../components/DestinationGrid";
import DestinationModal from "../../components/DestinationModal";
import { Heart } from "lucide-react";
import "../../styles/SavedDestinations.css";

export default function SavedDestinations() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [destinations, setDestinations] = useState([]); // Fetched destinations
  const [savedDestinations, setSavedDestinations] = useState([]); // Saved destinations
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Fetch saved destinations and all destinations on mount
  useEffect(() => {
    const token = localStorage.getItem("pintrail-token");

    // Fetch all destinations
    axios
      .get("http://localhost:3000/destinations/fetch", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch destinations:", error);
      });

    // Fetch saved destinations
    axios
      .get("http://localhost:3000/saved/fetch", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSavedDestinations(response.data); // Set saved destinations
      })
      .catch((error) => {
        console.error("Failed to fetch saved destinations:", error);
      });
  }, []);

  // Filter saved destinations based on category and search query
  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = destinations
      .filter((destination) => savedDestinations.includes(destination.id)) // Only show saved destinations
      .filter((destination) => {
        const matchesCategory =
          category === "all" || destination.category.includes(category);
        const matchesSearch = destination.name.toLowerCase().includes(lowerQuery);
        return matchesCategory && matchesSearch;
      });

    setFilteredDestinations(results);
  }, [category, searchQuery, destinations, savedDestinations]);

  return (
    <div className="saved-page">
      <header className="saved-header">
        <div className="saved-header-icon-title">
          <div className="saved-header-icon">
            <Heart className="icon-heart" />
          </div>
          <h1 className="saved-title">Saved Destinations</h1>
        </div>
        <button className="view-map-button">View on Map</button>
      </header>

      <div className="dg-wrapper">
        <div className="filter-search-wrapper">
          <FilterBar onFilterSelect={setCategory} />
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <DestinationGrid
        destinations={filteredDestinations}
        onDestinationClick={setSelectedDestination}
        highlightedDestination={selectedDestination?.id || null}
        isSaved={true} // All destinations in this grid are saved
      />

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          isSaved={true} // This is a saved destination
        />
      )}
    </div>
  );
}
