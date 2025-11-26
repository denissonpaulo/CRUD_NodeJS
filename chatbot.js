// Chatbot simples - renomeie o arquivo para desativar
const express = require('express');
const router = express.Router();

router.post('/chat', (req, res) => {
    const { mensagem } = req.body;
    
    // Respostas automáticas
    const respostas = {
        'oi': 'Olá! Como posso ajudar?',
        'produtos': 'Veja nossa lista de produtos acima! 👆',
        'preço': 'Os preços estão listados junto com cada produto 💰',
        'help': 'Digite "produtos" para ver a lista ou adicione novos produtos acima!',
        'default': 'Não entendi. Digite "help" para ajuda.'
    };

    const resposta = respostas[mensagem.toLowerCase()] || respostas.default;
    res.json({ resposta });
});

console.log('🤖 Chatbot ativo - Renomeie chatbot.js para desativar');
module.exports = router;