import express from 'express';
import prisma from '../db.js';
import { authenticateToken } from '../authService.js';  // adjust path as needed

const router = express.Router();

// GET /destinations/fetch (protected)
router.get('/fetch', authenticateToken, async (req, res) => {
  try {
    const destinations = await prisma.destinations.findMany();
    res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /destinations/add (protected)
router.post('/add', authenticateToken, async (req, res) => {
  try {
    const { name, description, category, image } = req.body;
    await prisma.destinations.create({
      data: {
        name,
        description,
        category,
        image,
      },
    });

    res.status(201).json({ message: "Destination added successfully" });
  } catch (error) {
    console.error("Error adding destination:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
