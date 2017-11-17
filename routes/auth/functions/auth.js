const { check, validationResult } = require("express-validator/check")
const { matchedData, sanitize } = require("express-validator/filter")

const User = require("../../api/users/model")

module.exports = {
  // ---------------------------------------------------------------------------

  get: (req, res, next) => {
    res.send({ message: "auth" })
  },

  // ---------------------------------------------------------------------------

  signup: (req, res, next) => {
    // Get the validation result whenever you want
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() })
    }
    // matchedData returns only the subset of data validated by the middleware
    const user = matchedData(req)

    res.send({
      message: "SIGN UP",
      user: req.body
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
