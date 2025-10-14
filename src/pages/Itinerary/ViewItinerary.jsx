import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Trash2 } from "lucide-react";
import "../../styles/ViewItinerary.css";
import axios from "axios";

export default function ViewItinerary() {
  const { id } = useParams();
  const itineraryId = Number(id);

  const [itinerary, setItinerary] = useState({
    name: '',
    destinations: [],
  });
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('pintrail-token');

        const itineraryRes = await axios.get(`/itineraries/view?id=${itineraryId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const pricingRes = await axios.get(`/pricing/all`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        setItinerary(itineraryRes.data);
        setExpenses(pricingRes.data);
      } catch (error) {
        console.error(error);
        setItinerary({ name: 'Itinerary not found', destinations: [] });
        setExpenses([]);
      }
    };

    fetchData();
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
      alert(response.data.message);
      setItinerary((prev) => ({
        ...prev,
        destinations: prev.destinations.filter(
          (dest) => dest.id !== destinationId
        ),
      }));
      setExpenses((prev) => prev.filter(
        (exp) => exp.destination_id !== destinationId
      ));
    } catch (error) {
      console.error(error);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateDestinationCost = (destinationId) => {
    const destinationExpenses = expenses.filter(
      (expense) => expense.destination_id === destinationId
    );
    const totalCostPerDay = destinationExpenses
      .reduce((sum, item) => sum + Number(item.cost_per_day), 0);

    return totalCostPerDay;
  };

  const calculateTotalItineraryCost = () => {
    return itinerary.destinations.reduce((total, dest) => {
      return total + calculateDestinationCost(dest.id);
    }, 0);
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

        {itinerary.destinations.length > 0 && (
          <div className="total-cost-card">
            <div className="cost-wrapper">
              <div className="cost-left">
                <div className="icon-wrapper">₹</div>
                <div>
                  <h3>Total Itinerary Cost</h3>
                  <p></p>
                </div>
              </div>
              <div className="cost-right">
                <div className="cost-amount">{formatCurrency(calculateTotalItineraryCost())}</div>
                <div className="cost-unit"></div>
              </div>
            </div>
          </div>
        )}

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
                  <div className="destination-header">
                    <h3 className="destination-name">{destination.name}</h3>
                    <div className="destination-cost">
                      <div className="cost-value">
                        {formatCurrency(calculateDestinationCost(destination.id))}
                      </div>
                      <div className="cost-label">per day</div>
                    </div>
                  </div>
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
