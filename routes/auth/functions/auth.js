const { validationResult } = require("express-validator/check")
const { matchedData } = require("express-validator/filter")

const User = require("../../api/users/model")

module.exports = {
  // ---------------------------------------------------------------------------
  // GET AUTH
  get: (req, res, next) => {
    res.send({ message: "auth" })
  },

  // ---------------------------------------------------------------------------
  // SIGN UP
  signup: (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) res.status(422).send({ errors: errors.mapped() })
    const user = matchedData(req)

    const newUser = new User({
      name: user.name,
      email: user.name,
      password: user.password
    })

    newUser.save(err => {
      if (err) res.send(err)
      else {
        req.user = newUser
        next()
      }
    })
  },

  // ---------------------------------------------------------------------------
  // SIGN IN
  signin: (req, res, next) => {
    res.send({ message: "SIGN IN" })
  },

  // ---------------------------------------------------------------------------
  // SIGN OUT
  signout: (req, res, next) => {
    res.send({ message: "SIGN OUT" })
  },

  // ---------------------------------------------------------------------------
  // IS WITH TOKEN
  isWithToken: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------
  // IS AUTHENTICATED
  isAuthenticated: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------
  // IS AUTHORIZED
  isAuthorized: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------
  // IS ROLE
  isRole: (req, res, next) => {
    res.send({ message: "..." })
  },

  // ---------------------------------------------------------------------------
  // IS ROLE ADMIN
  isAdmin: (req, res, next) => {
    res.send({ message: "..." })
  }
}
