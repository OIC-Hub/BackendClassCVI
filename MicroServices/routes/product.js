const express = require("express")
const createProduct = require("../controller/productController")

const route = express.Router();

route.post("/create", createProduct);

module.exports = (route)

