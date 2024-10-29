import { BookEntity } from "../entities/book.entity.js";
import { ERRORS, SUCESS } from "../shared/book.message.js";

class BookService {
  async createBookService(title, writer, genre, year_release, link) {
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
        link,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return error;
    }
  }

  async getAllBooksService() {
    try {
      const books = await BookEntity.findAll();
      return books;
    } catch (error) {
      return error;
    }
  }

  async getBookByTitleService(title) {
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

  async getBookByWriterService(writer) {
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

  async getBookByGenreService(genre) {
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

  async updateTitleBookService(id, newTitle) {
    try {
      const bookId = await BookEntity.findByPk(id);
      if (!bookId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const updateTitle = await BookEntity.update(
        { title: newTitle },
        {
          where: {
            id,
          },
        }
      );
      return `${SUCESS.UPDATED}`;
    } catch (error) {
      return error;
    }
  }

  async deleteBookService(id) {
    try {
      const bookId = await BookEntity.findByPk(id);
      if (!bookId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const deleteBook = await BookEntity.destroy({
        where: {
          id,
        },
      });
      return `${SUCESS.DELETED}`;
    } catch (error) {
      return error;
    }
  }
}

export { BookService };
