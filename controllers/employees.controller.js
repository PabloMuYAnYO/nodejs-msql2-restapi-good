const { pool } = require("../db");

const getEmployees = (req, res, next) =>{
    res.send(`<h1>Obteniendo empleados...</h1>`);
}

const createEmployees = async (req, res, next) =>{
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
    //console.log(name, salary)
    // res.send(`<h1>Creando empleados...</h1>`)
    res.send({
        id: rows.insertId,
        name,
        salary
    });

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