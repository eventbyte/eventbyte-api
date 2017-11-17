const express = require("express")
const router = express.Router()

const auth = require("./functions/auth")

router.get("/", auth.get)

module.exports = router
