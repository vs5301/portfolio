const Resume = require("../models/Resume")
const { S3 } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid")
const { AppErr, appErr } = require("../utils/appErr")

// Configure aws
const s3 = new S3({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
})

// add resume
const addResumeCtrl = async (req, res, next) => {
    const { title, description, key } = req.body
    
    // check if AWS S3 is provided
    if (!key) {
        return next(new AppErr("AWS S3 key for resume is required", 400))
    }

    // generate unique filename for resume
    const resumeKey = uuidv4()

    // define parameters for downloading resume
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
    }

    try {
        // fetch resume from s3
        const data = await s3.getObject(params)

        const resume = new Resume({
            title: title,
            description: description,
            key: key,
        })

        const savedResume = await resume.save()
        res.status(200).json({
            status: "success",
            data: {
                resume: savedResume,
                key: resumeKey,
                file: data
            }
        })
    } catch (error) {
        next(appErr(error.message, 500))
    }
}

// get resume
const getResumeCtrl = async (req, res, next) => {
    try {
        const key = "Resume.pdf"
        const resume = await Resume.findOne({ key: key })
        if (!resume) {
            next(new AppErr("Resume not found", 400))
        }

        const s3Url = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${resume.key}`
        res.status(200).json({
            status: "success",
            data: {
                resumeUrl: s3Url
            }
        })
    } catch (error) {
        next(appErr(error.message, 500))
    }
}

module.exports = {
    addResumeCtrl,
    getResumeCtrl
}