const express = require("express");
const router = express.Router();

const {createAppointment} = require("../controller/appointController")
const {getAppointments} = require("../controller/appointdataController")
const {addsignup} = require("../controller/signupController");
const {login} = require("../controller/loginController")

router.post("/appoint",createAppointment)
router.get("/appoin",getAppointments);
router.post("/sign", addsignup);
router.post("/loginUser",login);
 
 module.exports = router ;