// backend/routes/auth.js
import express from 'express';

const router = express.Router();

// POST /login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login submitted', email, password);
    res.json({ message: 'Login successful' });
});

// POST /register
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Register submitted', name, email, password);
    res.json({ message: 'Register successful' });
});

export default router;
