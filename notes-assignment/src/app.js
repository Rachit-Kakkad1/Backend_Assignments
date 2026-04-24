import express from "express";
import dotenv from "dotenv";
import noteRoutes from "./routes/note.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Notes Management API" });
});

export default app;
