import { Search } from "lucide-react";
import "../styles/SearchBar.css"; // or your shared CSS

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar-wrapper">
      <Search size={18} className="search-icon" />
      <input
        type="text"
        placeholder="Search destinations..."
        className="search-bar"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
