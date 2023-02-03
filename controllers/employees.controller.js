const pool = require("../db.js");

const getEmployees = async(req, res, next) =>{
    // res.send(`<h1>Obteniendo empleados...</h1>`);
    const [row] = await pool.query('SELECT * FROM employee');
    res.json(row);
}

const createEmployees = async(req, res, next) =>{
    const {employee_name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (employee_name, salary) VALUES (?, ?)', [employee_name, salary]);
    //console.log(employee_name, salary)
    //res.send(`<h1>Creando empleados...</h1>`)
    res.send({
        id_employee: rows.insertId,
        employee_name,
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