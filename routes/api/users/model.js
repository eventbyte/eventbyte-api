const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const ModelName = "User"
const ModelSchema = mongoose.Schema(
  {
    // CORE
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    hash: {
      type: String,
      select: false
    },
    salt: {
      type: String,
      select: false
    },
    name: {
      type: String,
      required: true
    },
    username: {
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
        default: false
      },
      flagged: {
        type: Boolean,
        default: false
      },
      classification: {
        type: String,
        default: "person"
      },
      roles: {
        type: Array,
        default: ["regular"]
      },
      membership: {
        type: String,
        default: "free"
      },
      badges: {
        type: Array,
        default: []
      },
      experience: {
        type: Number,
        default: 0
      },
      level: {
        type: Number,
        default: 0
      }
    },
    // PROFILE
    profile: {
      gravatar: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: "User"
      },
      gender: {
        type: String,
        default: ""
      },
      phone: {
        type: String,
        default: ""
      },
      birthDate: {
        type: String
      },
      age: {
        type: Number
      }
    },
    // LINKS
    links: {
      website: {
        type: String
      },
      facebook: {
        type: String
      },
      linkedin: {
        type: String
      },
      twitter: {
        type: String
      },
      googleplus: {
        type: String
      },
      github: {
        type: String
      }
    },
    // TOKEN
    token: {
      auth: {
        type: String
      },
      verify: {
        type: String
      },
      reset: {
        type: String
      }
    },
    // EVENTS
    events: {
      submitted: [
        {
          type: Schema.Types.ObjectId,
          ref: "Event"
        }
      ],
      saved: [
        {
          type: Schema.Types.ObjectId,
          ref: "Event"
        }
      ]
    },
    // TOPICS
    events: {
      submitted: [
        {
          type: Schema.Types.ObjectId,
          ref: "Topic"
        }
      ],
      saved: [
        {
          type: Schema.Types.ObjectId,
          ref: "Topic"
        }
      ]
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

ModelSchema.plugin(AutoIncrement, { id: "user_id", inc_field: "id" })

const Model = mongoose.model(ModelName, ModelSchema)

module.exports = Model
