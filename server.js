const express = require("express");
const mongoose = require("mongoose");
const port = 7000;
const app = express();

require("dotenv").config({path :"./config/.env"} );
const  UsernModel = require("./models/User");
//Connecting to DB
mongoose
  .connect(
    `${process.env.DB_URL}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    } 
  ) 
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });
app.use(express.json())

app.use("/user",require("./userRoutes"));






  app.listen(port, (err) =>
  err ? console.log(err) : console.log("Server is running")
);
