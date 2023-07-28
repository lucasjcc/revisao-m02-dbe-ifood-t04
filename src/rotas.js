const express = require('express')
const { listarAulas, cadastrarAulas } = require('./controladores/aulas')
const rotas = express()

rotas.get('/aulas/:id', listarAulas)
rotas.post('/aulas/:id', cadastrarAulas)

module.exports = {
    rotas
}

