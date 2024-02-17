const mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://vaibhavsharma5301:YaB6KwbpcxQH8hHl@portfolio.sgbuvvx.mongodb.net/portfolio?retryWrites=true&w=majority"
        )
    } catch (error) {
        console.error(error.nessage);
        process.exit(1)
    }
}

dbConnect()