// Displaying Response on specific routes on user demands

const express =require('express');
const router = express.Router();

const {getAllProducts, 
    getAllProductsStatic } = require('../controllers/products')

router.route('/').get(getAllProducts)// what to bring in routes h
router.route('/static').get(getAllProductsStatic) // what to bring in routes

module.exports = router; 