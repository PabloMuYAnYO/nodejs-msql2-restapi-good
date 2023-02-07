const express = require('express');
const router = express.Router();
// * traemos del controlador
const {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} = require('../controllers/employees.controller')


router.get('/employees',  getEmployees);

router.get('/employees/:id',  getEmployee); // * con identificador

router.post('/employees',  createEmployee);

router.put('/employees', updateEmployee);

router.delete('/employees', deleteEmployee);
  
module.exports = router;