const getEmployees = (req, res, next) =>{
    res.send(`<h1>Obteniendo empleados...</h1>`);
}

const createEmployees = (req, res, next) =>{
    res.send(`<h1>Creando empleados...</h1>`);
}

const updateEmployees = (req, res, next) =>{
    res.send(`<h1>Actualizando empleados...</h1>`);
}

const deleteEmployees = (req, res, next) =>{
    res.send(`<h1>Eliminando empleados...</h1>`);
}

module.exports = {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees
}