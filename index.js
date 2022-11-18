"use strict";

const express = require("express");
const app = express();
const fs = require("fs");
const fsPromise = require("fs").promises;
const dataFile = "./data/data1.json";
app.use(express.static("public"));

app.get("/api/data", async (req, res) => {
  try {
    let data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

async function getData() {
  let rawData = await fsPromise.readFile(dataFile, "utf8");
  return JSON.parse(rawData);
}
app.listen(3000, () => {
  console.log("web server listening on port 3000!");
});
