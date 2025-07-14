import { useState, useEffect } from "react";
import axios from "axios"; // <-- Import axios
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import DestinationGrid from "../../components/DestinationGrid";
import DestinationModal from "../../components/DestinationModal";

export default function ExplorePage() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [destinations, setDestinations] = useState([]); // <-- fetched data
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [savedDestinations, setSavedDestinations] = useState([]); // <-- Track saved destinations
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  // Fetch destinations from backend once on mount
  useEffect(() => {
    const token = localStorage.getItem("pintrail-token");
    
    // Fetch destinations
    axios
      .get("http://localhost:3000/destinations/fetch", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDestinations(response.data);
        setFilteredDestinations(response.data); // Initialize filtered list
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
        setSavedDestinations(response.data); // Save fetched saved destination IDs
      })
      .catch((error) => {
        console.error("Failed to fetch saved destinations:", error);
      });
  }, []);

  // Filter whenever category, searchQuery or destinations change
  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = destinations.filter((destination) => {
      const matchesCategory =
        category === "all" || destination.category.includes(category);
      const matchesSearch = destination.name.toLowerCase().includes(lowerQuery);
      return matchesCategory && matchesSearch;
    });
    setFilteredDestinations(results);
  }, [category, searchQuery, destinations]);

  // Check if the destination is saved
  const isSaved = (destinationId) => {
    return savedDestinations.includes(destinationId);
  };

  return (
    <>
      <div className="dg-wrapper">
        <FilterBar onFilterSelect={setCategory} />
        <SearchBar onSearch={setSearchQuery} />
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
          isSaved={isSaved(selectedDestination.id)} // Pass isSaved prop
        />
      )}
    </>
  );
}
