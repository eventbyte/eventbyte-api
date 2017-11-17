const express = require("express")
const router = express.Router()

const { check, body, validationResult } = require("express-validator/check")
const { matchedData, sanitize } = require("express-validator/filter")

const auth = require("./functions/auth")
const validate = require("./functions/validate")

router.get("/", auth.get)

// -----------------------------------------------------------------------------
// SIGN UP : SAVE NEW USER

router.post(
  "/signup",
  [
    // CHECK EMAIL
    body("email")
      .isEmail()
      .withMessage("must be an email")
      .trim()
      .normalizeEmail(),
    // CHECK PASSWORD
    body("password", "passwords must be at least 5 characters long").isLength({
      min: 5
    })
  ],
  auth.signup
)

// -----------------------------------------------------------------------------
// SIGN IN : RESPONSE AUTH TOKEN

router.post(
  "/signin",
  [
    // CHECK EMAIL
    body("email")
      .isEmail()
      .withMessage("must be an email")
      .trim()
      .normalizeEmail(),
    // CHECK PASSWORD
    body("password")
  ],
  auth.signin
)

// -----------------------------------------------------------------------------
// SIGN OUT : DELETE AUTH TOKEN

router.post("/signout", auth.signout)

// -----------------------------------------------------------------------------

router.get("/is-with-token", auth.isWithToken) // CHECK TOKEN

// ----------------------------------------------------------------------------

router.get("/is-authenticated", auth.isAuthenticated) // CHECK USER TOKEN

// ----------------------------------------------------------------------------

router.get("/is-authorized", auth.isAuthorized) // CHECK USER PRIVILEGE

// ----------------------------------------------------------------------------

router.get("/is-role", auth.isRole) // CHECK USER ROLE

// ----------------------------------------------------------------------------

router.get("/is-admin", auth.isAdmin) // CHECK USER ROLE IF ADMIN

module.exports = router
