import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {
  mockItineraries,
  mockItineraryDestinations,
  destinations,
} from "../../data/travelData";
import "../../styles/ItineraryPage.css";

// Utility: Get destinations for a given itineraryId
function getDestinationsForItinerary(itineraryId) {
  // Find destinationIds linked to this itineraryId
  const destIds = mockItineraryDestinations
    .filter((rel) => rel.itineraryId === itineraryId)
    .map((rel) => rel.destinationId);

  // Map to actual destination objects
  return destinations.filter((dest) => destIds.includes(dest.id));
}

// ----- ItineraryCard -----
function ItineraryCard({ itinerary, onDelete }) {
  return (
    <div className="itinerary-card">
      <div className="itinerary-thumbnail">
        {itinerary.destinations && itinerary.destinations.length > 0 ? (
          <img
            src={itinerary.destinations[0].image}
            alt={itinerary.destinations[0].name}
          />
        ) : (
          <div className="itinerary-placeholder">No Image</div>
        )}
      </div>
      <div className="itinerary-info">
        <h3 className="itinerary-name">{itinerary.name}</h3>
        <p className="itinerary-count">
          {itinerary.destinations?.length ?? 0}{" "}
          {(itinerary.destinations?.length ?? 0) === 1
            ? "destination"
            : "destinations"}
        </p>
        <div className="itinerary-buttons">
          <Link to={`/itinerary/${itinerary.id}`} className="btn view">
            View
          </Link>
          <button className="btn map">Map</button>
          <button
            className="btn delete icon-only"
            onClick={() => onDelete(itinerary.id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ----- ItineraryGrid -----
function ItineraryGrid({ itineraries, onDelete }) {
  return (
    <div className="itinerary-grid">
      {itineraries.map((itinerary) => (
        <ItineraryCard
          key={itinerary.id}
          itinerary={itinerary}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

// ----- ItineraryPage -----
export default function ItineraryPage() {
  // Compose itineraries with destinations on initial load
  const composeItinerariesWithDestinations = () => {
    return mockItineraries.map((itinerary) => {
      const linkedDestinations = getDestinationsForItinerary(itinerary.id);
      return { ...itinerary, destinations: linkedDestinations };
    });
  };

  const [itineraries, setItineraries] = useState(
    composeItinerariesWithDestinations()
  );
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");

  const handleCreate = () => {
    if (!newName.trim()) return;
    const newId = (
      Math.max(...itineraries.map((it) => parseInt(it.id, 10)), 0) + 1
    ).toString();
    const newItinerary = {
      id: newId,
      name: newName.trim(),
      destinations: [],
    };
    console.log("new itinerary:", newItinerary);
    setItineraries((prev) => [newItinerary, ...prev]);
    setNewName("");
    setShowModal(false);
  };

  const handleDelete = (id) => {
    console.log("deleted itinerary:", id);
    alert("Itinerary successfully deleted");
    setItineraries((prev) => prev.filter((itinerary) => itinerary.id !== id));
  };

  return (
    <div className="itinerary-page">
      {/* Header is handled globally in App.jsx now */}

      <main className="itinerary-main">
        <h1 className="itinerary-title">My Itineraries</h1>
        <p className="itinerary-description">
          Plan and organize your trips with custom itineraries. Create detailed
          travel plans and visualize your journey.
        </p>
        <button className="create-button" onClick={() => setShowModal(true)}>
          Create New Itinerary
        </button>
        <p className="itinerary-count">{itineraries.length} itineraries found</p>
        <ItineraryGrid itineraries={itineraries} onDelete={handleDelete} />
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Itinerary</h2>
            <input
              type="text"
              placeholder="Itinerary name..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleCreate} className="btn view">
                Create
              </button>
              <button onClick={() => setShowModal(false)} className="btn delete">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
