const pool = require("../db.js");

const getEmployees = async(req, res, next) =>{
    try{
        // * Prueba de error
        // throw new Error('Mi error');
        // res.send(`<h1>Obteniendo empleados...</h1>`);
        const [row] = await pool.query('SELECT * FROM employee');
        res.json(row);
    }catch{
        return res.status(500).json({
            message: 'Something was wrong...'
        })
    }
}

const getEmployee = async (req, res) => {
    try{
        // * Prueba de error
        // throw new Error('Mi error');
        // console.log(req.params.id);
        const [rows] = await pool.query('SELECT * FROM employee WHERE id_employee = ?', [req.params.id_employee]);

        if(rows.length <= 0){
            return res.status(404).json({
                message: 'Employee not found!'
            });
        }

        console.log(rows);
        res.json(rows[0]);
    }catch{
        return res.status(500).json({
            message: 'Something was wrong...'
        })
    }
}

const createEmployee = async(req, res, next) =>{
    try{
        // * Prueba de error
        // throw new Error('Mi error');
        const {employee_name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO employee (employee_name, salary) VALUES (?, ?)', [employee_name, salary]);
        //console.log(employee_name, salary)
        //res.send(`<h1>Creando empleado...</h1>`)
        res.send({
            id_employee: rows.insertId,
            employee_name,
            salary
        });
    }catch{
        return res.status(500).json({
            message: 'Something was wrong...'
        })
    }

}

const updateEmployee = async (req, res, next) =>{
    try{
        // * Prueba de error
        // throw new Error('Mi error');
        const { id_employee } = req.params
        const { employee_name, salary } = req.body
    
        const [result] = await pool.query('UPDATE employee SET employee_name = IFNULL(?, employee_name), salary = IFNULL(?, salary) WHERE id_employee = ?', [employee_name, salary, id_employee])
        // console.log(id_employee, employee_name, salary);
        console.log(result);
    
        if(result.affectedRows === 0){
            return res.status(404).json({
                message: 'Employee not found!'
            });
        }
    
        const [rows] = await pool.query('SELECT * FROM employee WHERE id_employee = ?', [id_employee]);
    
        res.json(rows[0]);
    }catch{
        return res.status(500).json({
            message: 'Something was wrong...'
        })
    }
}

const deleteEmployee = async (req, res, next) =>{
    try{
        // * Prueba de error
        // throw new Error('Mi error');
        const [result] = await pool.query('DELETE FROM employee WHERE id_employee = ?', [req.params.id_employee]);
        // console.log(result);
        if(result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Employee not found!'
            });
        }
        res.sendStatus(204);
    }catch{
        return res.status(500).json({
            message: 'Something was wrong...'
        })
    }
}

module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}