const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const ModelName = "Topic"
const ModelSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

ModelSchema.plugin(AutoIncrement, {
  id: "topic_id",
  inc_field: "id"
})

const Model = mongoose.model(ModelName, ModelSchema)

module.exports = Model
