const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
var path = require('path');
const app = express();
const port = 3000;

// static
app.use(express.static(path.join(__dirname, 'public')));

// http log
// app.use(morgan('combined')); 

// view template
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// home


app.listen(port)