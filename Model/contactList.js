/*<!--     FileName: contactList.js      -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 19th June 2022     -->*/

var mongoose = require('mongoose');

var contactModel = mongoose.Schema({
    contactName: String,
    contactPhone: String,
    contactEmail: String

},{
    collection: "book"
});

module.exports = mongoose.model('contactList', contactModel);