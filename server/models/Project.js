const mongoose = require("mongoose")

// project schema
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timeline: {
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
        virtuals: true
    }
})

// model
const Project = mongoose.model("Project", projectSchema)
module.exports = Project