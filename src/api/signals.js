const express = require("express");
const router = express.Router();
const http = require("http");
const moment = require('moment');

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ signals: [] }).write();

router.post("/symbol/:symbol/timeFrame/:timeframe", (req, res) => {
  console.warn("signals", req.params);
  db.get("signals")
    .push({ symbol: req.params.symbol, timeFrame: req.params.timeframe, dateTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a") })
    .write();
  res.end();
});

router.get("/", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(db.get("signals")));
});

module.exports = router;
