const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).send({ message: 'Not found' });
    }
})

router.post('/work', async (req, res) => {
    try {
        await Workout.create(req.body);
        res.status(201).send({ message: 'Workout created' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).send({ message: 'Not found' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Workout.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Workout deleted' });
    } catch (error) {
        res.status(500).send({ message: 'Not found' });
    }
});

module.exports = router;