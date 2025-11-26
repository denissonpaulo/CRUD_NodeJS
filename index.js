const express = require('express');
const path = require('path');
const produtoRoutes = require('./routes/produtoRoutes');
const chatbot = require('./chatbot'); // Renomeie chatbot.js para desativar

const app = express();
const PORT = 3000;

// Configurações básicas
app.use(express.json());
app.use(express.static('public'));

// Rotas
app.use('/produtos', produtoRoutes);
app.use('/api', chatbot); // Comente esta linha para desativar chatbot

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando: http://localhost:${PORT}`);
    console.log(`📊 CRUD de produtos disponível`);
    console.log(`🤖 Chatbot: http://localhost:${PORT}/api/chat`);
});