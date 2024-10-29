import { BookService } from "../services/Book.service";

const instanceBookService = new BookService();

const createBook = async (req, res) => {
  const { title, writer, genre, year_release, link } = req.body;
  const newBook = await instanceBookService.createBookService(
    title,
    writer,
    genre,
    year_release,
    link
  );
  res.status(201).json({ newBook });
};

const getAllBooks = async (req, res) => {
  const books = await instanceBookService.getAllBooksService();
  res.json({ books });
};

const getBookByTitle = async (req, res) => {
  const { title } = req.body;
  const bookByTitle = await instanceBookService.getBookByTitleService(title);
  res.json({ bookByTitle });
};

const getBookByWriter = async (req, res) => {
  const { writer } = req.body;
  const bookByWriter = await instanceBookService.getBookByWriterService(writer);
  res.json({ bookByWriter });
};

const getBookByGenre = async (req, res) => {
  const { genre } = req.body;
  const bookByGenre = await instanceBookService.getBookByGenreService(genre);
  res.json({ bookByGenre });
};

const updateTitle = async (req, res) => {
  const { id } = req.params;
  const { newTitle } = req.body;
  const updatedTitle = await instanceBookService.updateTitleBookService(
    id,
    newTitle
  );
  res.json({ updateTitle });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await instanceBookService.deleteBookService(id);
  res.json({ deletedBook });
};

export {
  createBook,
  getAllBooks,
  getBookByGenre,
  getBookByTitle,
  getBookByWriter,
  updateTitle,
  deleteBook,
};
