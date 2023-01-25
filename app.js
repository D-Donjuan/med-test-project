const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

//Load config
dotenv.config({path: './config/config.env'});

const app = express();

//morgan is a logger that shows any HTTP request that comes in the console
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

//changing file extension of template engine from .handlebars -> .hbs
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);