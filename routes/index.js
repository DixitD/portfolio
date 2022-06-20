/*<!--     FileName: index.ejs      -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 19th June 2022     -->*/

var express = require('express');
const contactList = require('../Model/contactList');
var router = express.Router();

var indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutMePage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services',indexController.displayServicesPage);

/* GET Contacts page. */
router.get('/contact',  indexController.displayContactsPage);

router.get('/login',indexController.displayLoginPage);

router.get('/register',indexController.displayRegisterPage);

router.post('/login',indexController.performLoginPage);

router.post('/register',indexController.performRegisterPage);

router.get('/logout', indexController.performLogout);

module.exports = router;