import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Trash2 } from "lucide-react";
import "../../styles/ViewItinerary.css";
import axios from "axios";

export default function ViewItinerary() {
  const { id } = useParams();
  const itineraryId = Number(id); // Convert to number here

  const [itinerary, setItinerary] = useState({
    name: '',
    destinations: [],
  });

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const token = localStorage.getItem('pintrail-token');
        const response = await axios.get(`/itineraries/view?id=${itineraryId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        setItinerary(response.data);
      } catch (error) {
        console.error(error);
        setItinerary({ name: 'Itinerary not found', destinations: [] });
      }
    };
    fetchItinerary();
  }, [itineraryId]);

  const handleRemoveDestination = async (destinationId) => {
    const token = localStorage.getItem('pintrail-token');
    try {
      const response = await axios.post('/itineraries/remove',
        { itineraryId: itinerary.id, destinationId },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message)
      setItinerary((prev) => ({
        ...prev,
        destinations: prev.destinations.filter(
          (dest) => dest.id !== destinationId
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="view-container">
      <main className="view-main">
        <header className="view-header">
          <div className="header-top">
            <h1 className="itinerary-name">{itinerary?.name || "Itinerary not found"}</h1>
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
