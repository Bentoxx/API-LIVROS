import prisma from "../service/prisma-client";
import { Request, Response } from "express";

export default class LivroControlador {
    async criarLivro(req: Request, res: Response) {
        const { nomeAutor, titulo, disponivel } = req.body;
        try {
            const tituloExistente = await prisma.livro.findUnique({
                where: {
                    titulo
                }
            })
            if(tituloExistente){
                return res.status(400).json({mensagem: "Este livro ja existe!"})
            }
            const livro = await prisma.livro.create({
                data: {
                    titulo,
                    nomeAutor,
                    disponivel
                }
            })
            return res.status(201).json(livro)
        } catch (error) {
            const erro = error as Error;
            res.status(400).json({ erro: erro.message });
        }
    }
    async listarLivros(req: Request, res: Response) {
        try {
            const livros = await prisma.livro.findMany();
            return res.status(200).json(livros);
        } catch (error) {
            const erro = error as Error;
            res.status(400).json({ erro: erro.message });
        }
    }
    async detalharLivro(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const livroEncontrado = await prisma.livro.findUnique({
                where: {
                    id: Number(id)
                }
            })
            if(!livroEncontrado){
                return res.status(404).json({mensagem: "Livro não encontrado"})
            }
            return res.status(200).json(livroEncontrado)
        } catch (error) {
            const erro = error as Error;
            res.status(400).json({ erro: erro.message });
        }
    }
    async atualizarLivro(req: Request, res: Response) {
        const { id } = req.params;
        const { nomeAutor, titulo, disponivel } = req.body;
        try {
            const livroEncontrado = await prisma.livro.findUnique({
                where: {
                    id: Number(id)
                }
            })
            if(!livroEncontrado){
                return res.status(404).json({mensagem: "Livro não encontrado"})
            }
            const livro = await prisma.livro.update({
                where: {
                    id: Number(id)
                },
                data: {
                    nomeAutor,
                    titulo,
                    disponivel
                }
            })
            return res.status(200).json(livro)
        } catch (error) {
            const erro = error as Error;
            res.status(400).json({ erro: erro.message });
        }
    }
    async deletarLivro(req: Request, res: Response) {
        const { id } = req.params
        try {
            const livroIdentificado = await prisma.livro.findFirst({
                where: {
                    id: Number(id)
                }
            })
            if(!livroIdentificado){
                return res.status(400).json({mensagem: "Livro não encontrado"})
            }
            await prisma.livro.delete({
                where:{
                    id: Number(id)
                }
            })
            return res.status(204).send()
        } catch (error) {
            const erro = error as Error;
            res.status(400).json({ erro: erro.message });
        }
    }
}