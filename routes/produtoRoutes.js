const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Define rotas do CRUD
router.post('/', produtoController.criar);       // CREATE
router.get('/', produtoController.listar);       // READ ALL  
router.get('/:id', produtoController.buscar);    // READ ONE
router.put('/:id', produtoController.atualizar); // UPDATE
router.delete('/:id', produtoController.remover);// DELETE

module.exports = router;