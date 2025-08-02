import express from "express";
import prisma from "../db.js"; // uses your custom Prisma path

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const pricingData = await prisma.destination_pricing.findMany({
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

export default router;
