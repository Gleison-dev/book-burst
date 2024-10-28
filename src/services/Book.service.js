import { BookEntity } from "../entities/book.entity.js";
import { ERRORS, SUCESS } from "../shared/book.message.js";

class BookService {
  async createBookService(title, writer, genre, year_release) {
    try {
      await BookEntity.sync();
      const verifyBookExists = await BookEntity.findOne({
        where: {
          title,
          writer,
        },
      });
      if (verifyBookExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const newBook = await BookEntity.create({
        title,
        writer,
        genre,
        year_release,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return error;
    }
  }

  async getAllBooks() {
    try {
      const books = await BookEntity.findAll();
      return books;
    } catch (error) {
      return error;
    }
  }

  async getBookByTitle(title) {
    try {
      const bookTitle = await BookEntity.findAll({
        where: {
          title,
        },
      });
      if (!bookTitle) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return bookTitle;
    } catch (error) {
      return error;
    }
  }

  async getBookByWriter(writer) {
    try {
      const bookWriter = await BookEntity.findAll({
        where: {
          writer,
        },
      });
      if (!bookWriter) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return bookWriter;
    } catch (error) {
      return error;
    }
  }

  async getBookByGenre(genre) {
    try {
      const bookGenre = await BookEntity.findAll({
        where: {
          genre,
        },
      });
      if (!bookGenre) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return bookGenre;
    } catch (error) {
      return error;
    }
  }
}
