const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const ModelName = "Event"
const ModelSchema = mongoose.Schema(
  {
    submitter: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    // ORIGIN
    origin: {
      url: {
        type: String,
        required: true
      },
      site: {
        type: String,
        required: true
      },
      organizer: {
        type: Array,
        required: false,
        default: []
      },
      image: {
        type: String,
        required: false
      }
    },
    // CORE
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    // META
    meta: {
      visible: {
        type: Boolean,
        default: true
      },
      verified: {
        type: Boolean,
        default: true
      },
      flagged: {
        type: Boolean,
        default: false
      }
    },
    // SCHEDULE
    schedule: {
      start: {
        type: Date
      },
      end: {
        type: Date
      },
      timezone: {
        type: String,
        default: "GMT+7"
      }
    },
    // LOCATION
    location: {
      method: {
        type: Array,
        default: ["Onsite"]
      },
      address: {
        type: String,
        default: ""
      },
      city: {
        type: String,
        default: ""
      },
      country: {
        type: String,
        default: ""
      },
      map: {
        type: String,
        default: ""
      }
    },
    // PRICE
    price: {
      min: Number,
      max: Number,
      currency: {
        type: String,
        default: "IDR"
      }
    },
    // TOPICS
    topics: [
      {
        type: Schema.Types.ObjectId,
        ref: "Topic"
      }
    ],
    // USERS
    savedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    joinedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    discussedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    // SPONSORED
    sponsored: {
      start: {
        type: Date
      },
      end: {
        type: Date
      },
      status: {
        type: Boolean,
        default: false
      }
    },
    // URL
    url: {
      plain: {
        type: String
      },
      vanity: {
        type: String
      }
    },
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
  id: "event_id",
  inc_field: "id"
})

const Model = mongoose.model(ModelName, ModelSchema)

module.exports = Model
