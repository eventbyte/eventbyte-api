const User = require("./users/model")
const Event = require("./events/model")
const Topic = require("./topics/model")

module.exports = {
  get: (req, res, next) => {
    res.send({ message: "api" })
  }
}
