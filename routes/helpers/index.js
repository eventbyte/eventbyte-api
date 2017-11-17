const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const User = require("../api/users/model")

module.exports = {
  // ---------------------------------------------------------------------------
  // DROP USERS
  dropUsers: () => {
    mongoose.connection.collections["counters"].drop(err => {
      err
        ? console.log(err)
        : mongoose.connection.collections["users"].drop(err => {
            err
              ? console.log(err)
              : console.log("mongodb collection counters & users dropped")
          })
    })
  },

  // ---------------------------------------------------------------------------
  // INSERT USERS
  insertUsers: data => {
    const result = User.create(data, (err, data) => {
      err ? err : data
    })
    return result
  },

  // ---------------------------------------------------------------------------
  // DECODE TOKEN
  decodeToken: token => {
    const decoded = jwt.verify(token, process.env.SECRET)
    if (decoded) return decoded
    else return null
  }
}
