import {MapPin, TreePine, Building, Waves, Mountain, Camera, Utensils, Library} from "lucide-react";
import "../styles/FilterBar.css";
import { useState } from "react";

export default function FilterBar({ onFilterSelect }) {
  const categories = [
    { id: "all", name: "All", icon: MapPin, color: "#ef4444" },
    { id: "nature", name: "Nature", icon: TreePine, color: "#10b981" },
    { id: "cities", name: "Cities", icon: Building, color: "#3b82f6" },
    { id: "beaches", name: "Beaches", icon: Waves, color: "#06b6d4" },
    { id: "adventure", name: "Adventure", icon: Mountain, color: "#8b5cf6" },
    { id: "photography", name: "Photography", icon: Camera, color: "#f59e0b" },
    { id: "food", name: "Food", icon: Utensils, color: "#f97316" },
    { id: "culture", name: "Culture", icon: Library, color: "#6366f1" },
  ];

  const [selected, setSelected] = useState("all");

  function handleClick(category) {
    setSelected(category.id);
    if (onFilterSelect) {
      onFilterSelect(category.id);
    }
  }

  return (
    <div className="filter-bar">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selected === category.id;

        const buttonStyle = isSelected
          ? {
              backgroundColor: category.color,
              color: "#fff",
              borderColor: category.color,
            }
          : {};

        return (
          <button
            key={category.id}
            className="filter-button"
            style={buttonStyle}
            onClick={() => handleClick(category)}
            aria-pressed={isSelected}
            role="button"
          >
            <Icon size={16} />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}
