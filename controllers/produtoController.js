const Produto = require('../models/Produto');

// Controlador do CRUD
const produtoController = {
    // CREATE - Adiciona produto
    async criar(req, res) {
        try {
            const produto = await Produto.create(req.body);
            res.json(produto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // READ - Lista todos produtos
    async listar(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // READ - Busca por ID
    async buscar(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            produto ? res.json(produto) : res.status(404).json({ error: 'Produto não encontrado' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // UPDATE - Atualiza produto
    async atualizar(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (produto) {
                await produto.update(req.body);
                res.json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // DELETE - Remove produto
    async remover(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (produto) {
                await produto.destroy();
                res.json({ message: 'Produto removido!' });
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = produtoController;