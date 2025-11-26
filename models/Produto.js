const database = require('./db');

// Define modelo Produto (tabela no banco)
const Produto = database.define('produto', {
    id: {
        type: database.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: database.Sequelize.DOUBLE
    },
    descricao: database.Sequelize.STRING
});

module.exports = Produto;