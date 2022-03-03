// importation express
const express = require("express");

// creation d'instance
const app = express();

// importation dotenv
require("dotenv").config();

// importation data base
const connectDB = require("./config/connectDB");
connectDB();
//json format
app.use(express.json());

//route
app.use("api/personne", require("./Route/personne")); //path initial du personne

//creation of server
// const pore = process.env.PORT;
// const pore=process.env.PORT
const pore=5000;
app.listen(pore, (error) => {
  error ? console.log(error) : console.log(`the server is running on:${pore}`);
});
