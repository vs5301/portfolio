const mongoose = require("mongoose")

// resume schema
const resumeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
})

// model
const Resume = mongoose.model("Resume", resumeSchema)
module.exports = Resume