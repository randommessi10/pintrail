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
    const created = await prisma.destinations.create({
      data: {
        name,
        description,
        category,
        image,
      },
    });

    res.status(201).json({ message: "Destination added successfully", destination: created });
  } catch (error) {
    console.error("Error adding destination:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /destinations/delete/:id (protected)
router.delete('/delete/:id', authenticateToken, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id) || id <= 0) {
      return res.status(400).json({ error: 'Invalid destination id' });
    }
    await prisma.destinations.delete({ where: { id } });
    return res.status(200).json({ message: 'Destination deleted' });
  } catch (error) {
    console.error('Error deleting destination:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;
