import express from "express";
const router = express.Router();

import {
  createNote,
  createNotesBulk,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote
} from "../controllers/note.controller.js";

router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router;