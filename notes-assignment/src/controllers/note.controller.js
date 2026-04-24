import Note from "../models/note.model.js";
import mongoose from "mongoose";

// Endpoints will be implemented one by one

export const createNote = async (req, res) => {};
export const createBulkNotes = async (req, res) => {};
export const getAllNotes = async (req, res) => {};
export const getNoteById = async (req, res) => {};
export const replaceNote = async (req, res) => {};
export const updateNote = async (req, res) => {};
export const deleteNote = async (req, res) => {};
export const deleteBulkNotes = async (req, res) => {};
export const getNotesByCategory = async (req, res) => {};
export const getNotesByStatus = async (req, res) => {};
export const getNoteSummary = async (req, res) => {};
export const filterNotes = async (req, res) => {};
export const getPinnedNotes = async (req, res) => {};
export const filterByCategory = async (req, res) => {};
export const filterByDateRange = async (req, res) => {};
export const paginateNotes = async (req, res) => {};
export const paginateByCategory = async (req, res) => {};
export const sortNotes = async (req, res) => {};
export const sortPinnedNotes = async (req, res) => {};
