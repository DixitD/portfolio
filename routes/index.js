/*<!--     Author- Dixit Hihoriya       -->
<!--     StudentID-301201312     -->*/


const express = require('express');
const router = express.Router();
var indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);

/* GET Contacts page. */
router.get('/contact',  indexController.displayContactsPage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutMePage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services',indexController.displayServicesPage);

module.exports = router;
