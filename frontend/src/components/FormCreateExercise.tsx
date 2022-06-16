import React from 'react'
import { createExercise } from '../api/api'
import { ExerciseContext } from '../context/exerciseContext'
import { FormEditExercise } from './FormEditExercise';

export const FormCreateExercise = () => {
    const { exerciseEdit } = React.useContext(ExerciseContext);

    const [exercise, setExercise] = React.useState({
        exerciceTitle: '',
        load: '',
        repetitions: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExercise({
            ...exercise,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        createExercise(exercise);
    };

    return (
        <>
            {Object.keys(exerciseEdit).length > 0 ? (
                <FormEditExercise />
            ) : (
                <aside>
                    <h2>Add a New Workout</h2>

                    <form>
                        <label htmlFor="exerciceTitle">
                            Exercise Title:
                            <input
                                onChange={handleChange}
                                name='exerciceTitle'
                                type="text" />
                        </label>

                        <label htmlFor="load">
                            Load(in kg):
                            <input
                                onChange={handleChange}
                                name='load'
                                type="number" />
                        </label>

                        <label htmlFor="repetitions">
                            Number of Reps:
                            <input
                                onChange={handleChange}
                                name='repetitions'
                                type="number" />
                        </label>

                        <button type="submit" onClick={(e) => handleSubmit(e)}>
                            Add Workout
                        </button>
                    </form>
                </aside>
            )}
        </>
    )
}
