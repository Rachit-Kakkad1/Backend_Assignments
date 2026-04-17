import express from "express";
const router = express.Router();

import {
  createNote,
  createNotesBulk,
  getAllNotes,
  getNoteById
} from "../controllers/note.controller.js";

router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);


export default router;