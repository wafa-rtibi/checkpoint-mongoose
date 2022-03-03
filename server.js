// importation dotenv
require("dotenv").config();

// importation express
const express = require("express");

// creation d'instance
const app = express();

// importation data base
const connectDB = require("./config/connectDB");
connectDB();
//json format
app.use(express.json());

//route
app.use("api/personne", require("./Route/personne")); //path initial du personne

//creation of server
const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`the server is running on:${port}`);
});
