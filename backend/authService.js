import jwt from "jsonwebtoken";

const JWT_SECRET = "pintrail"; // same secret as your auth routes

export function authenticateToken(req, res, next) {
  // Get token from header "Authorization: Bearer <token>"
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    // Attach user info to request object for downstream use
    req.user = user;
    next();
  });
}
