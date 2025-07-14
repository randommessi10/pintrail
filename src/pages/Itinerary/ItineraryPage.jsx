import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import "../../styles/ItineraryPage.css";

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
        {itinerary.destinations?.length ?? 0} {" "}
        {(itinerary.destinations?.length ?? 0) === 1 ? "destination" : "destinations"}
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
  const [itineraries, setItineraries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("pintrail-token");
    if (!token) return;

    fetch("http://localhost:3000/itineraries/fetch", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched itineraries:");
        setItineraries(data);
      })
      .catch((err) => {
        console.error("Failed to fetch itineraries", err);
      });
  }, []);

  const handleCreate = async () => {
    if (!newName.trim()) return;
  
    const token = localStorage.getItem("pintrail-token");
    if (!token) return;
  
    try {
      const response = await fetch("http://localhost:3000/itineraries/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newName.trim() }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Error creating itinerary:", data.message);
        return;
      }
  
      // ✅ only push what backend returns (with DB-assigned `id`)
      setItineraries((prev) => [data, ...prev]);
      setNewName("");
      setShowModal(false);
    } catch (err) {
      console.error("Error creating itinerary:", err);
    }
  };
  
  const handleDelete = async (id) => {
    const token = localStorage.getItem("pintrail-token");
    if (!token) return;
  
    const confirmed = window.confirm("Are you sure you want to delete this itinerary?");
    if (!confirmed) return;
  
    try {
      const res = await fetch(`http://localhost:3000/itineraries/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (res.ok) {
        alert("Itinerary successfully deleted");
        setItineraries((prev) => prev.filter((itinerary) => itinerary.id !== id));
      } else {
        const err = await res.json();
        alert(err.message || "Failed to delete itinerary");
      }
    } catch (err) {
      console.error("Error deleting itinerary:", err);
      alert("Something went wrong");
    }
  };
  

  return (
    <div className="itinerary-page">
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
