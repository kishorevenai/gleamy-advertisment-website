import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";
import { PrismaClient } from "@prisma/client";
console.log("Before PrismaClient init");
const prisma = new PrismaClient();
console.log("After PrismaClient init");


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

    return res.status(200).json({ message: "Inquiry saved" });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
