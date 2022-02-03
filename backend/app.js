const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

//routes
const routes = require('./routes')

//adding security
if(!isProduction) {
    app.use(cors());
}

//helmet for diff headers to secure app
app.use(helmet.crossOriginEmbedderPolicy({
    policy: "cross-origin"
}));

//csrf token setup to req csrfToken
app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
    }
}));

app.use(routes)

module.exports = app;
