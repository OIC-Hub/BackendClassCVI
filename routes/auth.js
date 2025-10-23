const {register, login, get} = require("../controller/authController");
const express = require("express")

const route = express.Router();

route.post("/reg", register)
route.get('/', get)
route.post("/login", login)

module.exports = (route);
