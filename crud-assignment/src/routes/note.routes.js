import express from "express";
const router = express.Router();

import {
  createNote,
  createNotesBulk,
  getAllNotes
} from "../controllers/note.controller.js";

router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/", getAllNotes);


export default router;