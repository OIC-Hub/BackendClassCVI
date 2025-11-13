const {register, login, get, getProfile, onlyAdmin} = require("../controller/authController");
const express = require("express")
const AuthGateKeeper = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

const route = express.Router();

route.post("/reg", register)
route.get('/', get)
route.post("/login", login)
route.get("/getprofile", AuthGateKeeper, getProfile )
route.get("/onlyadmin", AuthGateKeeper, roleMiddleware(["admin"]), onlyAdmin)
route.post("/verify-otp", verifyOtp)


module.exports = (route);
