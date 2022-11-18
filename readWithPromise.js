"use strict";

const express = require("express");
const app = express();
const fs = require("fs");

const dataFile = "./data/data.json";
app.use(express.static("public"));

app.get("/api/data", (req, res) => {
  getData()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

function getData() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataFile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}
app.listen(3000, () => {
  console.log("web server listening on port 3000!");
});
