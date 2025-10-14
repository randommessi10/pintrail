import express from "express";
import prisma from "../db.js"; // uses your custom Prisma path
import { authenticateToken } from "../authService.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const pricingData = await prisma.destination_pricing.findMany({
      where: {
        NOT: {
          category: 'flights'
        }
      },
      include: {
        destinations: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        destination_id: 'asc',
      },
    });

    // Cleaned-up response format
    const response = pricingData.map((item) => ({
      destination_id: item.destinations.id,
      destination_name: item.destinations.name,
      category: item.category,
      cost_per_day: item.cost_per_day,
      currency: item.currency,
    }));

    res.json(response);
  } catch (err) {
    console.error("Error fetching pricing data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /pricing/bulk for creating multiple pricing rows for a destination
router.post("/bulk", authenticateToken, async (req, res) => {
  try {
    const { destinationId, items } = req.body;

    // Basic presence checks
    if (destinationId === undefined || destinationId === null) {
      return res.status(400).json({ error: "destinationId is required" });
    }
    if (!Array.isArray(items)) {
      return res.status(400).json({ error: "items must be an array" });
    }
    if (items.length === 0) {
      return res.status(400).json({ error: "items cannot be empty" });
    }

    const numericDestinationId = Number(destinationId);
    if (!Number.isFinite(numericDestinationId) || numericDestinationId <= 0) {
      return res.status(400).json({ error: "destinationId must be a positive number" });
    }

    // Ensure destination exists
    const destination = await prisma.destinations.findUnique({
      where: { id: numericDestinationId },
      select: { id: true },
    });
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }

    // Validate and normalize items
    const ALLOWED_CATEGORIES = new Set(["accommodation", "food", "activities"]);
    const normalized = [];
    for (const raw of items) {
      if (!raw || typeof raw !== "object") continue;
      const category = String(raw.category || "").trim().toLowerCase();
      const cost = Number(raw.cost_per_day);
      const currency = (raw.currency || "INR").toString();

      if (!ALLOWED_CATEGORIES.has(category)) continue; // reject flights or unknown
      if (!Number.isFinite(cost) || cost < 0) continue;
      if (!currency) continue;

      normalized.push({
        destination_id: numericDestinationId,
        category,
        cost_per_day: cost,
        currency,
      });
    }

    if (normalized.length === 0) {
      return res.status(400).json({ error: "No valid pricing items to create" });
    }

    const result = await prisma.destination_pricing.createMany({ data: normalized });
    return res.status(201).json({ createdCount: result.count });
  } catch (err) {
    console.error("Error creating bulk pricing:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
