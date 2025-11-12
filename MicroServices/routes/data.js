const express = require("express");
const {addData, getData, getDataById, updateData} = require("../controller/dataController")

const route = express.Router();

route.get("/getdata", getData);
route.post("/adddata", addData);
route.get("/data/:id", getDataById)
route.put("/data/:id", updateData)

module.exports = (route)