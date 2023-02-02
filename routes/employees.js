const express = require('express');
const router = express.Router();
const getEmployees = require('../controllers/employees.controller')


router.get('/employees',  getEmployees);

router.post('/employees', function(req, res, next) {
    res.send(`<h1>Creando empleados...</h1>`);
});
router.put('/employees', function(req, res, next) {
    res.send(`<h1>Actualizando empleados...</h1>`);
});
router.delete('/employees', function(req, res, next) {
    res.send(`<h1>Eliminando empleados...</h1>`);
});
  
module.exports = router;