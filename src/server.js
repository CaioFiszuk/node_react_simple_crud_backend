require("dotenv/config");
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3334;
const routes = require('./routes');
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(PORT, ()=>console.log("It is working"));