
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect(process.env.MANGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`mongoDB connected to ${conn.connection.host}`);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}



module.exports = connectDB
