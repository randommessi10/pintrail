`
import express from 'express';
const router = express.Router();

// GET /itineraries
router.get('/', (req, res) => {});

// POST /itineraries
router.post('/', (req, res) => {});

// GET /itineraries/:id
router.get('/:id', (req, res) => {});

// PUT /itineraries/:id
router.put('/:id', (req, res) => {});

// GET /itineraries/:id/destinations
router.get('/:id/destinations', (req, res) => {});

// POST /itineraries/:id/destinations
router.post('/:id/destinations', (req, res) => {});

// PUT /itineraries/:id/destinations/:destinationId
router.put('/:id/destinations/:destinationId', (req, res) => {});

export default router;
`