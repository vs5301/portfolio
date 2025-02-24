const express = require("express")
const { createProjectCtrl, getProjectsCtrl, getProjectCtrl, deleteProjectCtrl, updateProjectCtrl } = require("../controllers/projectController")

const projectsRoute = express.Router()

// POST /api/v1/projects
projectsRoute.post("/", createProjectCtrl)

// GET /api/v1/projects
projectsRoute.get("/", getProjectsCtrl)

// GET /api/v1/projects/:name
projectsRoute.get("/:name", getProjectCtrl)

// DELETE /api/v1/projects/:id
projectsRoute.delete("/:id", deleteProjectCtrl)

// UPDATE /api/v1/projects/:id
projectsRoute.put("/:id", updateProjectCtrl)

module.exports = projectsRoute