const express = require("express")
const router = express.Router()

const user = require("./functions/user")
const event = require("./functions/event")
const topic = require("./functions/topic")

// // USER
// router.get("/", user.get)
// router.post("/", user.post)
// router.delete("/", user.delete)
//
// // USER ID
// router.get("/:id", user.getOne)
// router.put("/:id", user.putOne)
// router.delete("/:id", user.deleteOne)
//
// // USER ID / EVENT
// router.get("/:id/saves", event.get)
// router.post("/:id/saves", event.post)
// router.delete("/:id/saves/", event.delete)
//
// // USER ID / EVENT ID
// router.get("/:id/events/:event_id", event.getOne)
// router.put("/:id/events/:event_id", event.putOne)
// router.delete("/:id/events/:event_id", event.deleteOne)

module.exports = router
