const express = require('express')
const cors = require("cors")
require("./config/dbConnect")
const app = express()
const globalErrorHandler = require("./middlewares/globalErrHandler")
const skillsRoute = require("./routes/skillRoutes")
const projectsRoute = require("./routes/projectRoutes")

// middlewares
app.use(express.json())

// Cors middleware
app.use(cors())

// project route
app.use("/api/v1/projects", projectsRoute)

// skills route
app.use("/api/v1/skills", skillsRoute)

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Hi, I am Vaibhav Sharma! Welcome to the backend API for my portfolio",
        author: "vs5301",
    })
})

// error handler
app.use(globalErrorHandler)

const port = process.env.port || 9000
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))