const { application } = require('express');
const express = require('express');
const router = express.Router();
const employeesRoutes = require('./employees')
const {ping, index} = require('../controllers/index.controller')

/* GET home page. */
router.get('/', index)

router.get('/ping', ping);

// * Importamos rutas de ./employees
router.use(employeesRoutes)

module.exports = router;