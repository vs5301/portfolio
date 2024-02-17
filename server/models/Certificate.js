const mongoose = require("mongoose")

// certificate schema
const certificateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    skills: [
        {
            skillId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Skill"
            },
            name: String,
        }
    ]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
})

// model
const Certificate = mongoose.model("Certificate", certificateSchema)
module.exports = Certificate