const express = require("express");

const mongoose = require("mongoose");
const port = 3000;

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:pZyXjpfwLo247IRv@cluster0.vaq4unh.mongodb.net/auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(`${port}`);
    console.log(`Database is connected! Listening to localhost ${port}`);
  })
  .catch((err) => console.log(err));

//pZyXjpfwLo247IRv
