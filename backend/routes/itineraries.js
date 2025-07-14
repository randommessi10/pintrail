import express from "express";
import { authenticateToken } from "../authservice.js";
import prisma from "../db.js"; // adjust path if needed

const router = express.Router();

// GET /itineraries/fetch
router.get("/fetch", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const itineraries = await prisma.itineraries.findMany({
      where: { userid: userId },
      include: {
        itinerary_destinations: {
          include: {
            destinations: true,
          },
        },
      },
    });

    // Flatten response to match frontend expectations
    const formatted = itineraries.map((itinerary) => ({
      id: itinerary.id,
      name: itinerary.name,
      destinations: itinerary.itinerary_destinations.map(
        (rel) => rel.destinations
      ),
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching itineraries:", err);
    res.status(500).json({ message: "Failed to fetch itineraries" });
  }
});

// POST /itineraries/create
router.post("/create", authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const { name } = req.body;
  
  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const newItinerary = await prisma.itineraries.create({
      data: {
        name: name.trim(),
        userid: userId,
      },
    });

    res.status(201).json({
      id: newItinerary.id,
      name: newItinerary.name,
      destinations: [],
    });
  } catch (err) {
    console.error("Error creating itinerary:", err);
    res.status(500).json({ message: "Failed to create itinerary" });
  }
});

// DELETE /itineraries/:id
router.delete("/:id", authenticateToken, async (req, res) => {
  const itineraryId = parseInt(req.params.id, 10);
  const userId = req.user.id;

  try {
    // Confirm the itinerary belongs to the user
    const found = await prisma.itineraries.findFirst({
      where: {
        id: itineraryId,
        userid: userId,
      },
    });

    if (!found) {
      return res.status(404).json({ message: "Itinerary not found or unauthorized" });
    }

    // This will also delete related itinerary_destinations due to cascade
    await prisma.itineraries.delete({
      where: { id: itineraryId },
    });

    res.json({ message: "Itinerary deleted successfully" });
  } catch (err) {
    console.error("Error deleting itinerary:", err);
    res.status(500).json({ message: "Failed to delete itinerary" });
  }
});

//
router.get("/view", authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const itineraryId = parseInt(req.query.id, 10);
  console.log("Hitting the /view endpoint");
  console.log("User ID:", userId);
  console.log("Itinerary ID:", itineraryId);
  try {
    const itinerary = await prisma.itineraries.findFirst({
      where: { id: itineraryId, userid: userId },
      include: {
        itinerary_destinations: {
          include: {
            destinations: true,
          },
        },
      },
    });

    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    // Flatten response to match frontend expectations
    const formatted = {
      id: itinerary.id,
      name: itinerary.name,
      destinations: itinerary.itinerary_destinations.map(
        (rel) => rel.destinations
      ),
    };
    
    res.json(formatted);
  } catch (err) {
    console.error("Error fetching itineraries:", err);
    res.status(500).json({ message: "Failed to fetch itineraries" });
  }
});

router.post("/remove", authenticateToken, async (req,res) => {
  const { itineraryId, destinationId } = req.body;
  console.log("Hitting the /remove endpoint");
  console.log("User ID:", req.user.id);
  console.log("Itinerary ID:", itineraryId);
  console.log("Destination ID:", destinationId);

  try {
    // Delete the destination directly from the itinerary_destinations table
    await prisma.itinerary_destinations.delete({
      where: {
        itineraryid_destinationid: { // Use the composite key for the delete
          itineraryid: itineraryId,  // Correct spelling from schema
          destinationid: destinationId,  // Correct spelling from schema
        },
      },
    });

    res.json({ message: "Destination removed from itinerary successfully" });
  } catch (err) {
    console.error("Error removing destination from itinerary:", err);
    res.status(500).json({ message: "Failed to remove destination from itinerary" });
  }
});

// New route to fetch all itineraries for the logged-in user
router.get("/options", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    // Fetch all itineraries for the logged-in user
    const itineraries = await prisma.itineraries.findMany({
      where: { userid: userId },
    });

    // If no itineraries are found, return a message
    if (itineraries.length === 0) {
      return res.status(404).json({ message: "No itineraries found" });
    }

    // Return the list of itineraries
    res.json(itineraries);
  } catch (err) {
    console.error("Error fetching itineraries options:", err);
    res.status(500).json({ message: "Failed to fetch itineraries" });
  }
});

router.post("/add", authenticateToken, async (req, res) => {
  const { itineraryId, destinationId } = req.body;
  console.log("Hitting the /add endpoint");

  try {
    // Add the destination to the itinerary_destinations table
    await prisma.itinerary_destinations.create({
      data: {
        itineraryid: parseInt(itineraryId),
        destinationid: parseInt(destinationId),
      },
    });

    res.json({ message: "Destination added to itinerary successfully" });
  } catch (err) {
    console.error("Error adding destination to itinerary:", err);
    res.status(500).json({ message: "Failed to add destination to itinerary" });
  }
});

export default router;
