/*<!--     FileName: contactList.js      -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 19th June 2022     -->*/

var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var contactList = require('../model/contactList');

module.exports.displayContactList = (req, res, next) => {
    contactList.find((err, BookList) => {
        if (err) return console.error(err)
        else {
            console.log(BookList)
            res.render('contactList', {
                title: 'Contact List',
                BookList: BookList,
                displayName : req.user ? req.user.displayName : ''  
            });
        }

    });
}

module.exports.performAddContact = (req, res, next) => {

    var newContact = contactList({
        "contactName": req.body.contactName,
        "contactPhone": req.body.contactPhone,
        "contactEmail": req.body.contactEmail
    });

    contactList.create(newContact, (err, BookList) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contactList');
        }
    })
}

module.exports.displayUpdateContact =(req, res, next) => {
    var id = req.params.id;

    contactList.findById(id, (err, contactToUpdate) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('contactBook/update', {
                title: "Update Contact",
                contact: contactToUpdate,
                displayName : req.user ? req.user.displayName : ''
            })
        }
    });
}

module.exports.performUpdateContact =   (req, res, next) => {
    var id = req.params.id;

    var updatedContact ={
        "contactName": req.body.contactName,
        "contactPhone": req.body.contactPhone,
        "contactEmail": req.body.contactEmail
    }
    console.log(updatedContact)
    contactList.updateOne({_id : id}, updatedContact, (err)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contactList');
        }
    });

}
module.exports.performDeleteContact = (req, res, next) => {
    var id = req.params.id;

    contactList.remove({_id : id}, (err)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contactList');
        }
    });
}

module.exports.displayAddContact =  (req, res, next) => {
    res.render('contactBook/add', {
        title: 'Add Contact',
        displayName : req.user ? req.user.displayName : ''
    })
}