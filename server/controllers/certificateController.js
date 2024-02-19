const Certificate = require("../models/Certificate")
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

// Add Certificate
const createCertificateCtrl = async (req, res, next) => {
    const { name, link, date, category, description, skills } = req.body

    try {
        // convert skill names to skill ids
        const skillIds = await Promise.all(skills.map(async (skillName) => {
            return await findSkill(skillName)
        }))

        // Add Certificate
        const certificate = await Certificate.create({
            name,
            link,
            date,
            category,
            description,
            skills: skillIds
        })

        // Push certificate into skill's certificates field
        await Promise.all(skillIds.map(async (skillId) => {
            const skill = await Skill.findById(skillId)
            if (skill) {
                skill.certificates.push({
                    certificateId: certificate._id,
                    name: certificate.name,
                    link: certificate.link
                })
                await skill.save()
            }
        }))

        res.status(200).json({
            status: "success",
            data: certificate
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Get Certificates
const getCertificatesCtrl = async (req, res, next) => {
    try {
        const certificates = await Certificate.find().populate("skills")
        res.json(certificates)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Get Certificate
const getCertificateCtrl = async (req, res, next) => {
    try {
        // Find id in params
        const { id } = req.params
        const certificate = await Certificate.findById(id).populate("skills")
        res.json(certificate)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// Delete Certificate
const deleteCertificateCtrl = async (req, res, next) => {
    try {
        // Find id in params
        const { id } = req.params
        await Certificate.findByIdAndDelete(id).populate("skills")
        res.status(200).json({
            status: "success",
            data: null
        })
    } catch (error) {
        next(new AppErr(error.message, 500))        
    }
}

// Update Certificate
const updateCertificateCtrl = async (req, res, next) => {
    try {
        // Find id in params
        const { id } = req.params
        const { skills, ...updateData } = req.body
        
        // convert skill names to skill ids
        const skillIds = await Promise.all(skills.map(async (skillName) => {
            return await findSkill(skillName)
        }))

        updateData.skills = skillIds

        const certificate = await Certificate.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        })
        
        res.status(200).json({
            status: "success",
            data: certificate
        })
    } catch (error) {
        next(new AppErr(error.message, 500))        
    }
}

module.exports = {
    createCertificateCtrl,
    getCertificatesCtrl,
    getCertificateCtrl,
    deleteCertificateCtrl,
    updateCertificateCtrl
}