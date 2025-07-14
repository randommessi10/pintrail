import { useState, useMemo, useEffect } from "react";
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import DestinationGrid from "../../components/DestinationGrid";
import DestinationModal from "../../components/DestinationModal";
import { savedDestinations, destinations } from "../../data/travelData";
import { Heart } from "lucide-react";
import "../../styles/SavedDestinations.css";

export default function SavedDestinations() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Join savedDestinations with destinations just once (since data is static for now)
  const savedDestinationDetails = useMemo(() => {
    return savedDestinations
      .map((entry) =>
        destinations.find((dest) => dest.id === entry.destinationId)
      )
      .filter(Boolean);
  }, []); // ✅ empty dependency array — calculated once

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = savedDestinationDetails.filter((destination) => {
      const matchesCategory =
        category === "all" || destination.category.includes(category);
      const matchesSearch = destination.name.toLowerCase().includes(lowerQuery);
      return matchesCategory && matchesSearch;
    });
    setFilteredDestinations(results);
  }, [category, searchQuery, savedDestinationDetails]);

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
      />

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}
