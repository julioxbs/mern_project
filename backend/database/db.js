const mongoose = require('mongoose');
require('dotenv').config();

const USERDB = process.env.DB_USER;
const PASSDB = process.env.DB_PASS;

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${USERDB}:${PASSDB}@workout.ugdmn.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;