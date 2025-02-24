const express = require('express')
const { createSkillCtrl, getSkillsCtrl, getSkillCtrl, deleteSkillCtrl, updateSkillCtrl } = require("../controllers/skillController")

const skillsRoute = express.Router()

// POST /api/v1/skills
skillsRoute.post("/", createSkillCtrl)

// GET /api/v1/skills
skillsRoute.get("/all/:category", getSkillsCtrl)

// GET /api/v1/skills/:id
skillsRoute.get("/:name", getSkillCtrl)

// DELETE /api/v1/skills/:id
skillsRoute.delete("/:id", deleteSkillCtrl)

// UPDATE /api/v1/skills/:id
skillsRoute.put("/:id", updateSkillCtrl)

module.exports = skillsRoute