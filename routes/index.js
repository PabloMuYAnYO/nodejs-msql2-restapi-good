const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(`<h1>Hola mundo desde express</h1>`)
});

router.get('/employees', function(req, res, next) {
  res.send(`<h1>Obteniendo empleados</h1>`)
});

module.exports = router;
