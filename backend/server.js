import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // Import your auth routes
import destinationsRoutes from "./routes/destinations.js";
import itinerariesRoutes from "./routes/itineraries.js";
import savedRoutes from "./routes/saved.js";
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/destinations", destinationsRoutes);
app.use("/itineraries", itinerariesRoutes);
app.use("/saved", savedRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


