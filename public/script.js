// Funções do front-end para API
let editandoId = null; // Controla se está editando

async function adicionarProduto() {
    const produto = {
        nome: document.getElementById('nome').value,
        preco: parseFloat(document.getElementById('preco').value),
        descricao: document.getElementById('descricao').value
    };

    try {
        if (editandoId) {
            // Se está editando, faz UPDATE
            await fetch(`/produtos/${editandoId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            editandoId = null; // Sai do modo edição
        } else {
            // Se não está editando, faz CREATE
            await fetch('/produtos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
        }
        
        carregarProdutos();
        limparFormulario();
        atualizarBotao(); // Atualiza texto do botão
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function carregarProdutos() {
    try {
        const response = await fetch('/produtos');
        const produtos = await response.json();
        
        const lista = document.getElementById('listaProdutos');
        lista.innerHTML = produtos.map(produto => `
            <div class="produto">
                <strong>${produto.nome}</strong> - R$ ${produto.preco}
                <br><small>${produto.descricao}</small>
                <div class="botoes-acao">
                    <button class="btn-editar" onclick="editarProduto(${produto.id}, '${produto.nome}', ${produto.preco}, '${produto.descricao}')">
                        ✏️ Editar
                    </button>
                    <button class="btn-remover" onclick="removerProduto(${produto.id})">
                        🗑️ Remover
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para preencher formulário com dados do produto para edição
function editarProduto(id, nome, preco, descricao) {
    document.getElementById('nome').value = nome;
    document.getElementById('preco').value = preco;
    document.getElementById('descricao').value = descricao;
    
    editandoId = id; // Define que está editando este ID
    atualizarBotao(); // Muda botão para "Atualizar"
    
    // Rolagem suave até o formulário
    document.querySelector('.form-container').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

async function removerProduto(id) {
    if (confirm('Tem certeza que deseja remover este produto?')) {
        try {
            await fetch(`/produtos/${id}`, { method: 'DELETE' });
            carregarProdutos();
        } catch (error) {
            console.error('Erro:', error);
        }
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
}

function atualizarBotao() {
    const botao = document.querySelector('.form-container button');
    if (editandoId) {
        botao.textContent = '🔄 Atualizar Produto';
        botao.style.background = '#ffc107';
        botao.style.color = '#000';
    } else {
        botao.textContent = '➕ Adicionar Produto';
        botao.style.background = '#28a745';
        botao.style.color = '#fff';
    }
}

function cancelarEdicao() {
    editandoId = null;
    limparFormulario();
    atualizarBotao();
}

// Carrega produtos quando a página abre
carregarProdutos();