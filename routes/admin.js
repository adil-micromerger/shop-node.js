const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require('../controllers/admin');
const { route } = require('./shop');

// /admin/add-product => GET
router.get('/add-Product', adminController.getAddProduct);

router.get('/products',adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
