const express = require("express");

const mongoose = require("mongoose");
const port = 3001;
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.vaq4unh.mongodb.net/auth?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(`${port}`);
    console.log(`Database is connected! Listening to localhost ${port}`);
  })
  .catch((err) => console.log(err));

//pZyXjpfwLo247IRv
