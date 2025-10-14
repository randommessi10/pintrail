import { useState } from "react";
import { X, Building, Utensils, Mountain } from "lucide-react";

const CATEGORY_OPTIONS = [
  { key: "accommodation", label: "Accommodation", Icon: Building },
  { key: "food", label: "Food", Icon: Utensils },
  { key: "activities", label: "Activities", Icon: Mountain },
];

export default function PriceModal({ open, onClose, onSubmit }) {
  const [items, setItems] = useState(
    CATEGORY_OPTIONS.map((c) => ({ category: c.key, cost_per_day: "", currency: "INR" }))
  );

  if (!open) return null;

  const handleChange = (index, field, value) => {
    setItems((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = items
      .filter((i) => i.cost_per_day !== "" && !isNaN(Number(i.cost_per_day)))
      .map((i) => ({ ...i, cost_per_day: Number(i.cost_per_day) }));
    onSubmit(cleaned);
  };

  return (
    <div className="pm-overlay">
      <div className="pm-modal">
        <button className="pm-close" type="button" onClick={onClose}>
          <X size={18} />
        </button>
        <h3 className="pm-title">Add Estimated Prices (Per Day)</h3>
        <form onSubmit={handleSubmit} className="pm-form">
          {CATEGORY_OPTIONS.map((cat, idx) => {
            const Icon = cat.Icon;
            return (
              <div key={cat.key} className="pm-row">
                <div className="pm-row-left">
                  <Icon className="pm-icon" />
                  <span>{cat.label}</span>
                </div>
                <div className="pm-row-right">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    placeholder="0"
                    value={items[idx].cost_per_day}
                    onChange={(e) => handleChange(idx, "cost_per_day", e.target.value)}
                  />
                </div>
              </div>
            );
          })}
          <div className="pm-actions">
            <button type="submit" className="pm-btn-primary">
              Save Prices
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


