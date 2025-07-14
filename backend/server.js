import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // Import your auth routes
import destinationsRoutes from "./routes/destinations.js";
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/destinations", destinationsRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


