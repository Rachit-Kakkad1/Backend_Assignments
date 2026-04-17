import express from "express";
import noteRoutes from "./routes/note.routes.js";

const app = express();

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    data: null,
  });
});

export default app;