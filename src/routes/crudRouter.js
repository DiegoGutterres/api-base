// Importar pacote do express
const express = require('express');
// Instanciar o Router na na variavel router
const router = express.Router();
const { listarDados } = require('../controllers/controller')

router.get('/api', (listarDados));

router.post('/api', (request, response) =>(
    response.send('Metodo utilizado para salvar informações'),
    console.log("post"),
    console.log(request.body)

));

router.put('/api/:id', (request, response) =>(
    response.send('Metodo utilizado para editar informações'),
    console.log("put"),
    console.log('id: ', request.params.id)
));

router.delete('/api/:id', (request, response) =>(
    response.send('Metodo utilizado para deletar informações'),
    console.log('delete')
));

module.exports = router;