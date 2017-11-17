process.env.NODE_ENV !== "production" && require("dotenv").config()

const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
const jwt = require("jsonwebtoken") // used to create, sign, and verify tokens

// -----------------------------------------------------------------------------

// connect to MongoDB
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})

// -----------------------------------------------------------------------------

const index = require("./routes")
const auth = require("./routes/auth")
const api = require("./routes/api")
const apiUsers = require("./routes/api/users")
const apiEvents = require("./routes/api/events")
const apiTopics = require("./routes/api/topics")

const app = express()

// -----------------------------------------------------------------------------

app.use(cors())
app.use(helmet())
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// -----------------------------------------------------------------------------

app.use("/", index)
app.use("/auth", auth)
app.use("/api", api)
app.use("/api/users", apiUsers)
app.use("/api/events", apiEvents)
app.use("/api/topics", apiTopics)

app.get("/favicon.ico", (req, res) => res.sendStatus(204))

// -----------------------------------------------------------------------------

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

// -----------------------------------------------------------------------------

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.send("error")
})

// -----------------------------------------------------------------------------

module.exports = app
