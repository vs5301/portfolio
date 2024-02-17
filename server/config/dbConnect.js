const mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`)
    } catch (error) {
        console.error(error.nessage);
        process.exit(1)
    }
}

dbConnect()