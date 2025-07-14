import { Eye, MapPin } from "lucide-react";

export default function ItineraryCard({ name, description, image }) {
    return (
        <div className="itinerary-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={image} alt={name} />
            <div className="button-group">
                <button><Eye /> View</button>
                <button><MapPin /> Map</button>
            </div>
        </div>
    );
}
