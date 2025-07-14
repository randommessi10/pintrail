import React, { useState } from "react";
import {
  X,
  HeartIcon,
  Plus,
  MapPin,
  Trash2,
  TreePine,
  Building,
  Waves,
  Mountain,
  Camera,
  Utensils,
  Library,
} from "lucide-react";
import "../styles/DestinationModal.css";
import { mockItineraries } from "../data/travelData"; // import itineraries

const categories = {
  all: { name: "All", color: "#ef4444", Icon: MapPin },
  nature: { name: "Nature", color: "#10b981", Icon: TreePine },
  cities: { name: "Cities", color: "#3b82f6", Icon: Building },
  beaches: { name: "Beaches", color: "#fbbf24", Icon: Waves },
  adventure: { name: "Adventure", color: "#ef4444", Icon: Mountain },
  photography: { name: "Photography", color: "#8b5cf6", Icon: Camera },
  food: { name: "Food", color: "#f43f5e", Icon: Utensils },
  culture: { name: "Culture", color: "#f97316", Icon: Library },
};

export default function DestinationModal({
  destination,
  onClose,
  isSaved = false,
  onRemoveFromSaved,
}) {
  const category = categories[destination.category];
  const [saved, setSaved] = useState(isSaved);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [selectedItineraryId, setSelectedItineraryId] = useState(mockItineraries[0]?.id || "");

  const handleRemoveFromSaved = () => {
    if (onRemoveFromSaved) {
      onRemoveFromSaved(destination.id);
    }
    console.log("removed:", destination.id);
    setSaved(false);
  };

  const handleSave = () => {
    console.log("saved:", destination.id);
    setSaved(true);
  };

  const handleAddToItineraryClick = () => {
    setShowItineraryModal(true);
  };

  const handleAddToItineraryConfirm = () => {
    console.log("added to itinerary:", selectedItineraryId, destination.id);
    alert("Destination successfully added");
    setShowItineraryModal(false);
  };

  return (
    <div className="dm-overlay">
      <div className="dm-modal">
        <div className="dm-container">
          {/* Image Section */}
          <div className="dm-image-section">
            <img
              src={destination.image}
              alt={destination.name}
              className="dm-image"
            />
            <button onClick={onClose} className="dm-close-btn" type="button">
              <X className="dm-icon" />
            </button>
            {(isSaved || saved) && (
              <div className="dm-saved-badge">
                <HeartIcon className="dm-icon dm-saved-icon" />
                Saved
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="dm-content-section">
            <div className="dm-content-scroll">
              {category && (
                <div
                  className="dm-category-badge"
                  style={{
                    backgroundColor: `${category.color}20`,
                    color: category.color,
                  }}
                >
                  {category.Icon && (
                    <category.Icon className="dm-category-icon" />
                  )}
                  <span>{category.name}</span>
                </div>
              )}

              <h2 className="dm-title">{destination.name}</h2>
              <p className="dm-description">{destination.description}</p>

              {/* Mini Map */}
              <div className="dm-mini-map">
                <div className="dm-mini-map-header">
                  <MapPin className="dm-icon dm-location-icon" />
                  <span className="dm-location-text">Location</span>
                </div>
                <div className="dm-mini-map-placeholder">
                  <div className="dm-mini-map-center">
                    <MapPin className="dm-icon dm-mini-map-pin" />
                    <p className="dm-mini-map-text">Interactive map view</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="dm-action-buttons">
              <div className="dm-buttons-row">
                {isSaved || saved ? (
                  <>
                    <button
                      onClick={handleRemoveFromSaved}
                      className="dm-btn dm-btn-remove"
                      type="button"
                    >
                      <Trash2 className="dm-icon" />
                      Remove
                    </button>
                    <button
                      className="dm-btn dm-btn-itinerary"
                      type="button"
                      onClick={handleAddToItineraryClick}
                    >
                      <Plus className="dm-icon" />
                      Add to Itinerary
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="dm-btn dm-btn-save"
                      type="button"
                      onClick={handleSave}
                    >
                      <HeartIcon className="dm-icon" />
                      Save
                    </button>
                    <button
                      className="dm-btn dm-btn-itinerary"
                      type="button"
                      onClick={handleAddToItineraryClick}
                    >
                      <Plus className="dm-icon" />
                      Add to Itinerary
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Modal */}
      {showItineraryModal && (
        <div className="dm-itinerary-overlay">
          <div className="dm-itinerary-modal">
            <h3>Select an Itinerary</h3>
            <select
              className="dm-itinerary-select"
              value={selectedItineraryId}
              onChange={(e) => setSelectedItineraryId(e.target.value)}
            >
              {mockItineraries.map((itinerary) => (
                <option key={itinerary.id} value={itinerary.id}>
                  {itinerary.name}
                </option>
              ))}
            </select>
            <div className="dm-itinerary-actions">
              <button
                className="dm-btn dm-btn-itinerary"
                onClick={handleAddToItineraryConfirm}
              >
                Add
              </button>
              <button
                className="dm-btn dm-btn-remove"
                onClick={() => setShowItineraryModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
