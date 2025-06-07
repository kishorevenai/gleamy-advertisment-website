import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3600;

app.use(cors(corsOptions));
app.use(express.json());

//@ts-ignore
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        message,
      },
    });

    return res.status(200).json({ message: "Inquiry saved", inquiry });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//@ts-ignore
app.get("/api/get_all_inquiry", async (req, res) => {
  try {
    const result = await prisma.inquiry.findMany({});
    return res.status(200).json({ message: "Inquiry saved", result });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
