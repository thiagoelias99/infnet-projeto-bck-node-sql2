//Para agrupar middlewares de Validação

const EmpregadoValidation = require("./empregado");
const DepartamentoValidation = require("./departamento");
const ComunValidation = require("./comun");
const AlunoValidation = require("./aluno");

module.exports = {
    EmpregadoValidation,
    DepartamentoValidation,
    ComunValidation,
    AlunoValidation
};