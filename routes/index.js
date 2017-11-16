const express = require("express")
const router = express.Router()

const route = require("./route")

router.get("/", route.get)

module.exports = router
