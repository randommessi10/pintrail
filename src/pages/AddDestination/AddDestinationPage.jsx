import { useState } from "react";
import { Upload, MapPin, Lightbulb, Camera, Pencil, Tag } from "lucide-react";
import "../../styles/AddDestination.css";
import { uploadImageToCloudinary } from "../../utils/uploadCloudinary";
import axios from "axios";

export default function AddImage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const categories = [
    "all", "nature", "cities", "beaches", "adventure", "photography", "food", "culture"
  ];
  const tips = [
    {
      icon: <Camera size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Great Photos",
      text: "Use high-quality images with natural lighting to highlight the destination.",
    },
    {
      icon: <Pencil size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Compelling Descriptions",
      text: "Describe why the place is worth visiting and what makes it unique.",
    },
    {
      icon: <Tag size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Accurate Categories",
      text: "Choose a suitable category to help others discover it more easily.",
    },
  ];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCategoryChange(e) {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.image || !formData.category) {
      alert("Please fill in all required fields and upload an image.");
      return;
    }

    try {
      const imageUrl = await uploadImageToCloudinary(formData.image);
      const newDestination = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        image: imageUrl,
      };

      console.log("Destination data to save:", newDestination);
      try {
        axios.post("http://localhost:3000/destinations/add", newDestination);
      } catch (error) {
        console.error("Error adding destination:", error);
      }
      alert("Destination added successfully.");

      e.target.reset();
      setFormData({ name: "", description: "", category: "", image: null });
      setImagePreview(null);
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Image upload failed. Please try again.");
    }
  }

  return (
    <div className="add-image-container">
      <header className="add-image-header">
        <div className="icon-container">
          <MapPin size={32} color="white" />
        </div>
        <h1>Add New Destination</h1>
      </header>

      <main className="add-image-main">
        <form id="add-image-form" onSubmit={handleSubmit} className="form-section">
          {/* Image Upload */}
          <div className="form-group">
            <label htmlFor="image">Destination Image</label>
            <div className="image-upload">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              <label htmlFor="image" className="upload-label" tabIndex={0}>
                {imagePreview ? (
                  <>
                    <img id="image-preview" src={imagePreview} alt="Preview" />
                    <p>Click to change image</p>
                  </>
                ) : (
                  <>
                    <Upload size={48} color="#4b003d" />
                    <p>Click to upload image</p>
                    <p className="hint">JPG, PNG, or WEBP (max 10MB)</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Destination Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              placeholder="Enter destination name"
              value={formData.name}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              onChange={handleInputChange}
              placeholder="What makes this destination special?"
              value={formData.description}
              required
              rows="4"
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={formData.category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-button">
            Add Destination
          </button>
        </form>

        {/* Sidebar */}
        <aside className="tips-sidebar">
          <h2 className="sidebar-heading">
            <Lightbulb size={20} strokeWidth={2} style={{ marginRight: "0.5rem" }} />
            Upload Tips
          </h2>

          {tips.map(({ icon, title, text }, idx) => (
            <div className="tip" key={idx}>
              <h3>
                {icon}
                {title}
              </h3>
              <p>{text}</p>
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}
