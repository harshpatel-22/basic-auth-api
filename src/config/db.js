const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECT_DB_URL);
        console.log('Database connected ✅')
    } catch (error) {
        console.log('Error connecting database:', error);
        process.exit(1);
    }
}

module.exports = connectDB;