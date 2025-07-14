import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  mockItineraries,
  mockItineraryDestinations,
  destinations,
} from "../../data/travelData";
import { Trash2 } from "lucide-react";
import "../../styles/ViewItinerary.css";

export default function ViewItinerary() {
  const { id } = useParams();
  const foundItinerary = mockItineraries.find((item) => item.id === id);

  const [itinerary, setItinerary] = useState({
    ...foundItinerary,
    destinations: [],
  });

  useEffect(() => {
    const relatedDestIds = mockItineraryDestinations
      .filter((entry) => entry.itineraryId === id)
      .map((entry) => entry.destinationId);

    const fullDestinations = destinations.filter((dest) =>
      relatedDestIds.includes(dest.id)
    );

    setItinerary((prev) => ({
      ...prev,
      destinations: fullDestinations,
    }));
  }, [id]);

  const handleRemoveDestination = (destinationId) => {
    console.log("removed destination:", destinationId, "from itinerary:", itinerary.id);
    setItinerary((prev) => ({
      ...prev,
      destinations: prev.destinations.filter(
        (dest) => dest.id !== destinationId
      ),
    }));
  };

  return (
    <div className="view-container">
      <main className="view-main">
        <header className="view-header">
          <div className="header-top">
            <h1 className="itinerary-name">{itinerary.name}</h1>
            <button className="map-button">View on Map</button>
          </div>
        </header>

        <section className="destination-section">
          <h2 className="destination-heading">Destinations</h2>
          {itinerary.destinations.length === 0 && (
            <p>No destinations in this itinerary.</p>
          )}
          {itinerary.destinations.map((destination, index) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-content">
                <div className="destination-order">{index + 1}</div>
                <div className="destination-image">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="image"
                  />
                </div>
                <div className="destination-text">
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-desc">{destination.description}</p>
                </div>
                <div className="destination-remove">
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveDestination(destination.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
