const express = require("express")
const { addResumeCtrl, getResumeCtrl } = require("../controllers/resumeController")

const resumeRoute = express.Router()

// POST /api/v1/resume
resumeRoute.post("/", addResumeCtrl)

// GET /api/v1/resume
resumeRoute.get("/", getResumeCtrl)

module.exports = resumeRoute