const express = require('express');
const port = 5000;

const expressConfig = require('../src/config/expressConfig');



const app = express();

expressConfig(app);


app.listen(port,() =>console.log("Server is running on port 5000..."))