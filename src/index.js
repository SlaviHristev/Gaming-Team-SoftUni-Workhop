const express = require('express');
const port = 5000;

const expressConfig = require('../src/config/expressConfig');
const handlebarsConfig = require('../src/config/handlebarsConfig')

const routes = require('./routes');



const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(routes)


app.listen(port,() =>console.log("Server is running on port 5000..."))