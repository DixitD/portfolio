/*<!--     FileName: index.js      -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 19th June 2022     -->*/

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var passport = require('passport')

// create a reference to the model
let jwt = require('jsonwebtoken');
let DB = require('../config/db');
var userModel = require('../Model/userModel')
var user = userModel.user;

// Export module to display different pages from the views

// Home Page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
}

// AboutMe Page
module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', { title: 'About Me', displayName: req.user ? req.user.displayName : '' });
}

// Product Page
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Projects', displayName: req.user ? req.user.displayName : '' });
}

// Services Page
module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
}

// Contact Page
module.exports.displayContactsPage = (req, res, next) => {
    res.render('index', { title: 'Contacts', displayName: req.user ? req.user.displayName : '' });
}

// Login Page
module.exports.displayLoginPage = (req, res, next) => {
    if(!req.user){
        res.render('index', {
             title: 'Login',
             messages: req.flash('loginMessage'),
             displayName: req.user ? req.user.displayName : ''
            });
    } else return res.redirect('/')

}

// Perform login operation
module.exports.performLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // server err?
        if(err){
            return next(err);
        }
        // is there a user login error?
        if(!user){
            req.flash('loginMessage','Authentication Error');
            return res.redirect('/login');
        }
        
        req.login(user, (err)=> {
            // server error?
            if(err)
            {
                return next(err);
            }
            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });
            return res.redirect('/contactList');
        });
    })(req, res, next);
}

// Register Page
module.exports.displayRegisterPage = (req, res, next) => {
    if(!req.user){
        res.render('index', {
             title: 'Register',
             messages: req.flash('registerMessage'),
             displayName: req.user ? req.user.displayName : ''
            });
    } else return res.redirect('/')
}

// Perform Register
module.exports.performRegisterPage = (req, res, next) => {

    var newUser = user({
        "username": req.body.username,
        "password": req.body.password,
        "displayName": req.body.displayName,
        "email": req.body.email
    });

    user.register(newUser, req.body.password,(err) => {
        if (err) {
            console.log('Error in Register');
            if(err.name == 'userExistsError'){
                req.flash(
                    'registerMessage',
                    'Registration Error : User Already Exists!'
                );
                console.log('User Already Exists')
            }
            return res.render('index', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
               });
        } else {
            return passport.authenticate('local')(req,res, ()=>{
                res.redirect('/contactList')
            })
        }
    })
    res.render('index', { title: 'Register' });
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}
