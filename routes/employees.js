const express = require('express');
const router = express.Router();
// * traemos del controlador
const {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} = require('../controllers/employees.controller');


router.get('/employees',  getEmployees);

router.get('/employees/:id_employee',  getEmployee); // * con identificador id_employee

router.post('/employees',  createEmployee);

router.patch('/employees/:id_employee', updateEmployee); // * con identificador id_employee

router.delete('/employees/:id_employee', deleteEmployee); // * con identificador id_employee
  
module.exports = router;