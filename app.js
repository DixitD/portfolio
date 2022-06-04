/*
<!--     FileName: app.js         -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 4th June 2022     -->
*/


// Module dependencies
const express = require('express');
const indexRouter = require('./routes');
const app = express();
var path = require('path');
var routes = require('./routes/index');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));



//Get port from environment and store in Express.
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
})
console.log('listening on port 3000')