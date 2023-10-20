// Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na na variavel router
const router = Router();
const { 
    listarDados, 
    gravarDados,
    atualizarDados,
    deletarDados
} = require('../controllers/controller');


router.get('/listar', listarDados);

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;