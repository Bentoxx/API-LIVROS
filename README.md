![](https://i.imgur.com/xG74tOh.png)

# ORM I

## Descrição do Projeto

Este projeto tem como objetivo desenvolver uma API simples utilizando o Prisma Client como ORM para gerenciar a comunicação com o banco de dados. Você deve criar um CRUD (Create, Read, Update, Delete) completo para uma entidade, respeitando os requisitos descritos abaixo

## Contexto da API

Imagine que você foi contratado para desenvolver uma API que será utilizada para gerenciar um sistema de biblioteca. O sistema precisa armazenar informações sobre os livros disponíveis na biblioteca. Cada livro deve ter atributos que permitam identificar suas características principais e também informações adicionais

## Requisitos

Você deve criar uma API que gerencie a entidade `Livro`. Abaixo estão os campos que a entidade deve conter:

### Entidade: Livro

- **id**: (int) Identificador único do livro. Este campo deve ser gerado automaticamente pelo banco de dados e ser o campo chave primária
- **titulo**: (string) O título do livro. Este campo é obrigatório e deve ser único.
- **autor**: (string) O autor do livro. Este campo é obrigatório
- **dataPublicacao**: (date) Data de publicação do livro. Este campo é opcional
- **disponivel**: (boolean) Indica se o livro está disponível para empréstimo. Este campo é obrigatório e não pode ser nulo

### Rotas

- Implemente as rotas REST para realizar as operações de CRUD:
  - **POST** `/livros` - Criar um novo livro
  - **GET** `/livros` - Listar todos os livros
  - **GET** `/livros/:id` - Obter detalhes de um livro específico
  - **PUT** `/livros/:id` - Atualizar as informações de um livro
  - **DELETE** `/livros/:id` - Remover um livro do sistema
