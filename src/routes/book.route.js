import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookByGenre,
  getBookByTitle,
  getBookByWriter,
  updateTitle,
  deleteBook,
} from "../controllers/book.controller.js";

const bookRoute = Router();

bookRoute.post("/createBook", createBook);
bookRoute.get("/books", getAllBooks);
bookRoute.get("/bookByGenre", getBookByGenre);
bookRoute.get("/bookByTitle", getBookByTitle);
bookRoute.get("/bookByWriter", getBookByWriter);
bookRoute.patch("/updateTitle/:id", updateTitle);
bookRoute.delete("/deleteBook/:id", deleteBook);

export { bookRoute };
