const mongoose = require("mongoose")

// skill schema
const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    projects: [
        {
            projectId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Project"
            },
            name: String,
            Link: String,
        }
    ],
    certificates: [
        {
            certificateId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Certificate"
            },
            name: "String",
            link: "String"
        }
    ]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
})

// model
const Skill = mongoose.model("Skill", skillSchema)
module.exports = Skill