import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";
import { PrismaClient } from "@prisma/client";
import { pool } from "./config/dbConn";

const app = express();
app.use(cors(corsOptions));

const prisma = new PrismaClient();

dotenv.config();

const PORT = process.env.PORT || 3600;

app.use(express.json());

//@ts-ignore
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO Inquiry (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, message]
    );

    return res
      .status(200)
      .json({ message: "Inquiry saved", inquiry: result.rows[0] });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//@ts-ignore
app.get("/api/get_all_inquiry", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM Inquiry ORDER BY createdAt DESC`
    );
    return res
      .status(200)
      .json({ message: "Inquiry list", result: result.rows });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
