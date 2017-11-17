const mongoose = require("mongoose")

const { validationResult } = require("express-validator/check")
const { matchedData } = require("express-validator/filter")

const User = require("../../api/users/model")

module.exports = {
  // ---------------------------------------------------------------------------

  get: (req, res, next) => {
    res.send({ message: "auth" })
  },

  // ---------------------------------------------------------------------------

  drop: (req, res, next) => {
    mongoose.connection.collections["counters"].drop(err => {
      if (err) console.log(err)
      else {
        mongoose.connection.collections["users"].drop(err => {
          if (err) console.log(err)
          else {
            console.log("mongodb collection counters & users dropped")
            res.send({ message: "drop counters & users" })
          }
        })
      }
    })
  },

  // ---------------------------------------------------------------------------

  signup: (req, res, next) => {
    // Get the validation result whenever you want
    const errors = validationResult(req)
    if (!errors.isEmpty()) res.status(422).json({ errors: errors.mapped() })

    // matchedData returns only the subset of data validated by the middleware
    const user = matchedData(req)
    console.log(user)

    const newUser = new User({
      name: user.name,
      email: user.name,
      password: user.password
    })

    console.log(newUser)

    newUser.save(err => {
      if (err) res.send(err)
      else
        res.send({
          message: "SIGN UP",
          user: user
        })
    })
  },

  // ---------------------------------------------------------------------------

  signin: (req, res, next) => {
    res.send({ message: "SIGN IN" })
  },

  // ---------------------------------------------------------------------------

  signout: (req, res, next) => {
    res.send({ message: "SIGN OUT" })
  },

  // ---------------------------------------------------------------------------

  isWithToken: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------

  isAuthenticated: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------

  isAuthorized: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------

  isRole: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------

  isAdmin: (req, res, next) => {
    res.send({ message: "..." })
  }
}
