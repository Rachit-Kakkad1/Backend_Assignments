import express from "express";
import noteRoutes from "./routes/note.routes.js";

const app = express();

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Notes Management API is running...");
});

export default app;
