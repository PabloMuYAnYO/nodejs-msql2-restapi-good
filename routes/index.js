const { application } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../db.js');
const employeesRoutes = require('./employees')

/* GET home page. */
router.get('/ping', function(req, res, next) {
  const result = pool.query('SELECT 1 + 1 AS result');
  res.json(result[0]);
});

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(`<h1>Hola mundo desde express</h1>`);
});

router.use(employeesRoutes)

module.exports = router;