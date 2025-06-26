// Import the required modules
const express = require("express")
const router = express.Router()
 //import controller
const { contactUsmail} = require("../controllers/ContactUs.js")

//mapping 
router.post("/mail", contactUsmail)

//export
module.exports = router
