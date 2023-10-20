function listarDados(request, response){
    response.send('Retorno de lista de informações do bando de dados'),
    console.log("got")
}

module.exports = {
    listarDados
}