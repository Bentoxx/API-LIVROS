import { Router } from "express";
import LivroControlador from "./controladores/livro-controlador";

const rotas = Router();

// suas rotas aqui
rotas.post('/livros', new LivroControlador().criarLivro)
rotas.get('/livros', new LivroControlador().listarLivros)
rotas.get('/livros/:id', new LivroControlador().detalharLivro)
rotas.put('/livros/:id',new LivroControlador().atualizarLivro)
rotas.delete('/livros/:id',new LivroControlador().deletarLivro)

export default rotas;
