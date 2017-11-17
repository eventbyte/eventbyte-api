const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const ModelName = "Topic"
const ModelSchema = mongoose.Schema(
  {
    // CORE
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // EVENTS
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event"
      }
    ],
    // TIMESTAMP
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    deletedBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
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
