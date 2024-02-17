const Project = require("../models/Project")
const Skill = require("../models/Skill")
const { AppErr } = require("../utils/appErr")

// Find skill by name
const findSkill = async (skillName) => {
    try {
        const skill = await Skill.findOne({ name: skillName })
        return skill
    } catch (error) {
        console.error(`${skillName} does not exist`);
        return null
    }
}


// Create project
const createProjectCtrl = async (req, res, next) => {
    const { name, link, description, timeline, skills } = req.body
    
    try {
         // convert skill names to skill ids
        const skillIds = await Promise.all(skills.map(async (skillName) => {
            return await findSkill(skillName)
        }))

        // Create project
        const project = await Project.create({
            name,
            link,
            description,
            timeline,
            skills: skillIds
        })

        // Push project into skill's projects field
        await Promise.all(skillIds.map(async (skillId) => {
            const skill = await Skill.findById(skillId)
            if (skill) {
                skill.projects.push({
                    projectId: project._id,
                    name: project.name,
                    link: project.link
                })
                await skill.save()
            }
        }))

        res.status(200).json({
            status: "success",
            data: project
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Get Projects
const getProjectsCtrl = async (req, res, next) => {
    try {
        const projects = await Project.find().populate("skills")
        res.json(projects)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Get Project
const getProjectCtrl = async (req, res, next) => {
    try {
        // Find id in params
        const { id } = req.params
        const project = await Project.findById(id).populate("skills")
        res.json(project)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Delete Project
const deleteProjectCtrl = async (req, res, next) => {
    try {
        // Find id in params
        const { id } = req.params
        await Project.findByIdAndDelete(id).populate("skills")
        res.status(200).json({
            status: "success",
            data: null
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Update Project
const updateProjectCtrl = async (req, res, next) => {
    try {
        // Find id in params
        const { id } = req.params
        const { skills, ...updateData } = req.body
    
         // convert skill names to skill ids
        const skillIds = await Promise.all(skills.map(async (skillName) => {
            return await findSkill(skillName)
        }))

        updateData.skills = skillIds

        const project = await Project.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: "success",
            data: project
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    createProjectCtrl,
    getProjectsCtrl,
    getProjectCtrl,
    deleteProjectCtrl,
    updateProjectCtrl
}