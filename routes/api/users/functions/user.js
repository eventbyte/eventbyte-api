const auth = require("../../../auth/functions/auth")
const User = require("../model")
const Event = require("../../events/model")
const Topic = require("../../topics/model")

const helpers = require("../../../helpers")

const DATA = require("../data/seed")

module.exports = {
  // ---------------------------------------------------------------------------
  // DROP USERS
  drop: (req, res, next) => {
    helpers.dropUsers()

    res.send({
      message: "counters & users dropped"
    })
  },

  // ---------------------------------------------------------------------------
  // SEED USERS
  seed: async (req, res, next) => {
    helpers.insertUsers(DATA)

    res.send({
      message: "SEED",
      users: DATA
    })
  },

  // ---------------------------------------------------------------------------
  // GET USERS
  get: (req, res, next) => {
    res.send({ message: "GET" })
  }
}
