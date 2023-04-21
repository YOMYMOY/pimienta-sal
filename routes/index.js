const express = require('express');
const router = express.Router();

const {index, detalleMenu, detalleProducto} = require('../controllers/indexController');

/* GET home page. */
router
  .get('/', index)
  .get('/detalle/:id', detalleMenu)

module.exports = router;
