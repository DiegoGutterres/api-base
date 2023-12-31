// Importar pacote do express
const express = require('express');

// Instanciar o express na variavel app
const app = express();

//Importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter.js');

//importanod
const alunosRouter = require('./routes/alunosRouter');

// Importar pacote dotenv
const dotenv = require('dotenv').config();

//diz pro app usar a utilização do crudrouter
app.use('/api', crudRouter);

//alunos router
app.use('/api', alunosRouter);

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configuraçãoes do app para outros arquivos acessar
module.exports = app;