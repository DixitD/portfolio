/*<!--     Author- Dixit Hihoriya       -->
<!--     StudentID-301201312     -->*/

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


app.listen(3000)
console.log('listening on port 3000')