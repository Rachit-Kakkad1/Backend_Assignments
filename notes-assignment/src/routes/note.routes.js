import express from "express";
import {
  createNote,
  createBulkNotes,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  deleteBulkNotes,
  getNotesByCategory,
  getNotesByStatus,
  getNoteSummary,
  filterNotes,
  getPinnedNotes,
  filterByCategory,
  filterByDateRange,
  paginateNotes,
  paginateByCategory,
  sortNotes,
  sortPinnedNotes,
} from "../controllers/note.controller.js";

const router = express.Router();

// Bulk routes
router.post("/bulk", createBulkNotes);
router.delete("/bulk", deleteBulkNotes);

// Specific filter routes
router.get("/category/:category", getNotesByCategory);
router.get("/status/:isPinned", getNotesByStatus);

router.get("/filter", filterNotes);
router.get("/filter/pinned", getPinnedNotes);
router.get("/filter/category", filterByCategory);
router.get("/filter/date-range", filterByDateRange);

// Paginate routes
router.get("/paginate", paginateNotes);
router.get("/paginate/category/:category", paginateByCategory);

// Sort routes
router.get("/sort", sortNotes);
router.get("/sort/pinned", sortPinnedNotes);

// CRUD routes
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id/summary", getNoteSummary);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
