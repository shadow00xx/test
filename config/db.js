const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || process.env.MANGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI is required');
        }

        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoUri);
        console.log('mongoDB connected .....');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
