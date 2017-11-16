module.exports = {
  seed: (req, res, next) => {
    res.send({ message: "SEED" })
  },

  get: (req, res, next) => {
    res.send({ message: "GET" })
  }
}
