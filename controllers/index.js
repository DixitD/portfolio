/*
<!--     FileName: index.js       -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 4th June 2022     -->
*/

// Module dependencies
var express = require('express');
var router = express.Router();


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName : req.user ? req.user.displayName : '' });
}
module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', { title: 'About Me', displayName : req.user ? req.user.displayName : ''  });
}
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Projects', displayName : req.user ? req.user.displayName : ''  });
}
module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayName : req.user ? req.user.displayName : ''  });
}
module.exports.displayContactsPage = (req, res, next) => {
    res.render('index', { title: 'Contacts', displayName : req.user ? req.user.displayName : ''  });
}
