# BOOK BURST - Plataforma Gratuita de Livros

### SOBRE O BOOK BURST

O projeto foi criado com o intuíto de ser uma fonte de livros para pessoas que querem ter uma fonte
de livros gratuitos e usufruir de uma boa leitura. Além disso, o Book Burst foi idealizado como uma
plataforma para que escritores possam publicar seus livros gratuitamente. Sendo assim, o projeto está
sendo desenvolvido e atualmente está na versão da API 1.0

### FERRAMENTAS UTILIZADAS

O book burst está sendo desenvolvido com as seguintes ferramentas:

- Node.js
- Express
- Sequelize
- Postgress

### COMO USAR A API

O projeto ainda está rodando no localhost. Porém as rotas são:

- Cadastrar livros: https://localhost:3333/createBook - Body: title, writer, genre, year_release, link

- Listar todos os livros: https://localhost:3333/books - não é necessário preencher dados no body.

- Listar livro por título: https://localhost:3333/bookByWriter - Body: title

- Listar livro por escritor: https://localhost:3333/bookByWriter - Body: writer

- Listar livro por gênero: https://localhost:3333/bookByGenre - Body: genre

- Atualizar título do livro: https://localhost:3333/updateTitle/:id - substituir o ":id pelo ID do livro" - Body: newTitle

- Deletar livro: https://localhost:3333/deleteBook/:id - substituir o ":id pelo ID do livro" - não é necessário preencher dados no body.
