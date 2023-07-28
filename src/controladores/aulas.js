const { dados } = require('../dados')

const listarAulas = (req, res) => {
    const { id } = req.params
    const { filtro } = req.query
    const aluno = dados.filter(aluno => aluno.id === Number(id))
    if (aluno.length === 0) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" })
    }
    let aulas = aluno[0].aulas 
    if (filtro) {
        aulas = aulas.filter(aula => String(aula.vista) === filtro)
    }
    return res.json(aulas)
}

const cadastrarAulas = (req, res) => {
    const { nome, vista } = req.body
    const { id } = req.params
    if (!nome || vista === undefined) {
        return res.status(400).json({ mensagem: "O nome e o campo 'vista' são obrigatórios" })
    }
    const aluno = dados.filter(aluno => aluno.id === Number(id))
    const novaAula = {
        id: 16,
        nome,
        vista
    }
    aluno[0].aulas.push(novaAula)
    return res.status(201).json(aluno.aulas)
}

module.exports = {
    listarAulas,
    cadastrarAulas
}