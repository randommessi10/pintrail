import { useState, useEffect } from "react";
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import DestinationGrid from "../../components/DestinationGrid";
import DestinationModal from "../../components/DestinationModal";
import { destinations } from "../../data/travelData";

export default function ExplorePage() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [selectedDestination, setSelectedDestination] = useState(null); // 🔹 Add this

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = destinations.filter(destination => {
      const matchesCategory =
        category === "all" || destination.category.includes(category);
      const matchesSearch =
        destination.name.toLowerCase().includes(lowerQuery);
      return matchesCategory && matchesSearch;
    });
    setFilteredDestinations(results);
  }, [category, searchQuery]);

  return (
    <>
      <div className="dg-wrapper">
        <FilterBar onFilterSelect={setCategory} />
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <DestinationGrid
        destinations={filteredDestinations}
        onDestinationClick={setSelectedDestination} // 🔹 Pass handler
        highlightedDestination={selectedDestination?.id || null} // optional
      />

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </>
  );
}
