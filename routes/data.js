const express = require("express");
const {addData, getData} = require("../controller/dataController")

const route = express.Router();

route.get("/getdata", getData);
route.post("/adddata", addData);

module.exports = (route)