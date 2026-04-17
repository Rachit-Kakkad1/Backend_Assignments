import express from "express";
const router = express.Router();

import {
  createNote,
} from "../controllers/note.controller.js";

router.post("/", createNote);


export default router;