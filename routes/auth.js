const {register, login, get, getProfile} = require("../controller/authController");
const express = require("express")
const AuthGateKeeper = require("../middleware/authMiddleware")

const route = express.Router();

route.post("/reg", register)
route.get('/', get)
route.post("/login", login)
route.get("/getprofile", AuthGateKeeper, getProfile )

module.exports = (route);
