import express from 'express';
const router = express.Router();

// GET /destinations
router.get('/', (req, res) => {
  res.send("List of destinations");
});

// POST /destinations/add
router.post('/add', (req, res) => {
  try {
    const { name, description, category, image } = req.body;
    const newDestination = { name, description, category, image };

    console.log("New destination received:", newDestination);

    res.status(201).json(newDestination);
  } catch (error) {
    console.error("Error adding destination:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
