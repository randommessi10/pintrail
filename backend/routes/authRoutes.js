import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../db.js';

const router = express.Router();
const JWT_SECRET = 'pintrail'; // 🔐 Hardcoded secret for now

// POST /auth/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password, // for testing only
        hashed: hashedPassword,
      },
    });

    res.status(201).json({
      message: 'User registered successfully.',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user || !user.hashed) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.hashed);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      message: 'Login successful.',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
