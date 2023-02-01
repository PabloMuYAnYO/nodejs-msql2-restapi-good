const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/ping', function(req, res, next) {
  const result = pool.query('SELECT 1 + 1 AS result');
  res.json(result);
});

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(`<h1>Hola mundo desde express</h1>`);
});

router.get('/employees', function(req, res, next) {
  res.send(`<h1>Obteniendo empleados...</h1>`);
});
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