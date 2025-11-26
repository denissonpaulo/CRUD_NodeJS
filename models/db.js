const Sequelize = require('sequelize');

// Configura conexão com SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Cria tabelas automaticamente
(async () => {
    try {
        await sequelize.sync();
        console.log('✅ Banco sincronizado!');
    } catch (error) {
        console.log('❌ Erro no banco:', error);
    }
})();

module.exports = sequelize;