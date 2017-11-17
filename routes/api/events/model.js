const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const ModelName = "Event"
const ModelSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    submitter: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Topic"
      }
    ]
  },
  { timestamps: true }
)

ModelSchema.plugin(AutoIncrement, {
  id: "event_id",
  inc_field: "id"
})

const Model = mongoose.model(ModelName, ModelSchema)

module.exports = Model
