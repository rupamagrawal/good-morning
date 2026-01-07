const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/submit", async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.send(400).json({ message: "All fields are required!" });
  }

  try {
    await pool.query(
      "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3)",
      [name, phone, email]
    );
    res.json({
      message: `Good Morning, ${name} 👋`,
    });
  } catch (error) {
    console.log(error);
    res.send(500).json({ message: "Database Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
