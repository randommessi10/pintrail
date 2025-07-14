import express from "express";
import { authenticateToken } from "../authService.js";
import prisma from "../db.js";

const router = express.Router();

router.get("/fetch", authenticateToken, async (req, res) => {
    const userId = req.user.id;
    try {
        const saved = await prisma.saved_destinations.findMany({
            where: { userid: userId },
            select: {
                destinationid: true, // Only select the destination IDs
            },
        });
        const savedDestinationIds = saved.map(item => item.destinationid); // Extract only the IDs
        res.json(savedDestinationIds); // Return just the list of destination IDs
    } catch (error) {
        console.error("Error fetching saved destinations:", error);
        res.status(500).json({ message: "Failed to fetch saved destinations" });
    }
});


// POST /saving
router.post("/saving", authenticateToken, async (req,res) => {
    const { destinationId } = req.body;    
    const userId = req.user.id;
    try {
        const saved = await prisma.saved_destinations.create({
            data: {
                destinationid: destinationId,
                userid: userId,
            },
        }); 
        console.log("Saved with userid:", userId ," and destinationId:", destinationId);
        res.status(200).json(saved);
    } catch (error) {
        console.error("Error saving destination:", error);
        res.status(500).json({ message: "Failed to save destination" });
    }
});

// POST /unsaving
router.post("/unsaving", authenticateToken, async (req, res) => {
    const { destinationId } = req.body;
    const userId = req.user.id;
    try {
        const unsaved = await prisma.saved_destinations.delete({
            where: {
                userid_destinationid: {
                    userid: userId,
                    destinationid: destinationId,
                },
            },
        });
        console.log("Unsaved with userid:", userId ," and destinationId:", destinationId);

        res.status(200).json(unsaved); // Use 200 for successful deletion
    } catch (error) {
        console.error("Error unsaving destination:", error);
        res.status(500).json({ message: "Failed to unsave destination" });
    }
});


export default router;
