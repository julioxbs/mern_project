const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    exerciceTitle: {
        type: String,
        required: true,
    },

    load: {
        type: Number,
        required: true,
    },

    repetitions: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now().toString(),
    }
});

module.exports = mongoose.model('Workout', workoutSchema);