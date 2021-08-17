var express = require("express");
var app = express();
var cors = require("cors");
var connectDB = require("./config/db");

connectDB();

var corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/board", require("./routes/boardRouter"));

app.listen(3000, () => {
  console.log("listening");
});
