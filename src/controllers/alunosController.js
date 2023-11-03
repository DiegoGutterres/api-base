const { json } = require('express');
const connection = require('../config/db.js');

async function listarUsuarios(request, response) {
    const query = 'SELECT * FROM alunos;';

    connection.query(query, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: 'SUCESSO',
                    data: results
                    
                });

        } else {

        }
       });
}
module.exports = listarUsuarios;