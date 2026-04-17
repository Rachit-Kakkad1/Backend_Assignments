import express from "express";
const router = express.Router();

import {
  createNote,
  createNotesBulk,
} from "../controllers/note.controller.js";

router.post("/", createNote);
router.post("/bulk", createNotesBulk);


export default router;