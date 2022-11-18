"use strict";

const express = require("express");
const app = express();
const fs = require("fs");

const dataFile = "./data/data.json";
app.use(express.static("public"));

app.get("/api/data", (req, res) => {
  getData((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

function getData(callback) {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(data));
    }
  });
}
app.listen(3000, () => {
  console.log("web server listening on port 3000!");
});
