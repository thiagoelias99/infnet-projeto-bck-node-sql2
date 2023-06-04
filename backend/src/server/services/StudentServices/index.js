//Para agrupar funções relacionadas ao Student

const register = require("./register");
const listAll = require("./listAll");
const remove = require("./remove");
const updateByUuid = require("./updateByUuid");
const selectByUuid = require("./selectByUuid");

module.exports = {
    register,
    listAll,
    remove,
    updateByUuid,
    selectByUuid
};
