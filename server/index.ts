/*
  This is a simple authentication server using JWT tokens.
  It uses the jsonwebtoken library to generate and verify tokens.
  It also uses the node-fetch library to make requests to the Pexels API.
  It uses the dotenv library to load environment variables from a .env file.]

*/

console.log("Starting server...");

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";
import dotenv from "dotenv";

interface AuthRequest extends Request {
  user?: string | jwt.JwtPayload;
}

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;
const JWT_SECRET = process.env.JWT_SECRET || "secret";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function verifyToken(req: AuthRequest, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "token is invalid" });
    }
    req.user = decoded;
    next();
  });
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ token, username });
});

app.get("/api/photos", verifyToken, async (req, res) => {
  const { query, limit = 10, page = 1 } = req.query;

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=${limit}&page=${page}`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY as string
        }
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
