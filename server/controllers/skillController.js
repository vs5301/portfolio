const Skill = require("../models/Skill")
const { appErr, AppErr } = require("../utils/appErr")

// Create Skill
const createSkillCtrl = async (req, res, next) => {
    const { name, description, category } = req.body
    try {
        // check if skill exists
        const skillFound = await Skill.findOne({ name: name })
        if (skillFound) {
            return next(appErr("Skill already exists", 400))
        }

        const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${name}.webp`

        // Create skill
        const skill = await Skill.create({
            name,
            description,
            category,
            imageUrl
        })
        res.status(200).json({
            status: "success",
            data: skill,
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Get all Skills
const getSkillsCtrl = async (req, res, next) => {
    try {
        const { category } = req.params
        const skills = await Skill.find({category: category}).populate("projects")
        res.json(skills)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Get single Skill
const getSkillCtrl = async (req, res, next) => {
    try {
        // Find id from params
        const { name } = req.params
        const skill = await Skill.findOne({name: name}).populate("projects")
        res.json(skill)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Delete Skill
const deleteSkillCtrl = async (req, res, next) => {
    try {
        // Find id from params
        const { id } = req.params
        await Skill.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            data: null,
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Update Skill
const updateSkillCtrl = async (req, res, next) => {
    try {
        // Find id from params
        const { id } = req.params
        const { name } = req.body
        const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${name}.webp`
        const updateData = {
            ...req.body,
            imageUrl
        }
        const skill = await Skill.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        })
        res.json({
            status: "success",
            data: skill,
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    createSkillCtrl,
    getSkillsCtrl,
    getSkillCtrl,
    deleteSkillCtrl,
    updateSkillCtrl
}