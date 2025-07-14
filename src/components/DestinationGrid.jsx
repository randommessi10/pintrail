import React from "react";
import "../styles/DestinationGrid.css";
import {
  MapPin, TreePine, Building, Waves, Mountain, Camera, Utensils, Library,
} from "lucide-react";

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

export default function DestinationGrid({
  destinations,
  onDestinationClick = () => {},
  highlightedDestination = null,
}) {
  return (
    <div className="dg-wrapper">
      <div className="dg-grid">
        {destinations.map((destination, index) => {
          const category = categories[destination.category] || categories.all;
          const columnIndex = index % 3;
          let offsetClass = "";

          if (columnIndex === 1) offsetClass = "dg-offset-strong";
          else if (columnIndex === 2) offsetClass = "dg-offset-medium";

          return (
            <div
              key={destination.id}
              className={`dg-card-wrapper ${highlightedDestination === destination.id ? "dg-highlighted" : ""} ${offsetClass}`}
              onClick={() => onDestinationClick(destination)}
            >
              <div className="dg-card">
                <div className="dg-image-wrapper">
                  <img src={destination.image} alt={destination.name} className="dg-image" />
                  <div className="dg-image-overlay" />
                  {category && (
                    <div className="dg-category-chip" style={{ backgroundColor: category.color }}>
                      {category.Icon && <category.Icon className="dg-category-icon" />}
                      {category.name}
                    </div>
                  )}
                </div>
                <div className="dg-content">
                  <h3 className="dg-title">{destination.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
