import React from 'react'
import { ExerciseContext } from '../context/exerciseContext'
import { editExercise } from '../api/api'

export const FormEditExercise = () => {
    const { exerciseEdit, setExerciseEdit } = React.useContext(ExerciseContext);

    const { exerciceTitle, load, repetitions } = exerciseEdit;

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
        editExercise(exerciseEdit._id, exercise);
        setExerciseEdit({});
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setExerciseEdit({});
    }

    return (
        <aside>
            <h2>Edit Workout</h2>

            <form>
                <label htmlFor="exerciceTitle">
                    Exercise Title:
                    <input
                        placeholder={exerciceTitle}
                        onChange={handleChange}
                        name='exerciceTitle'
                        type="text" />
                </label>

                <label htmlFor="load">
                    Load(in kg):
                    <input
                        placeholder={load}
                        onChange={handleChange}
                        name='load'
                        type="number" />
                </label>

                <label htmlFor="repetitions">
                    Number of Reps:
                    <input
                        placeholder={repetitions}
                        onChange={handleChange}
                        name='repetitions'
                        type="number" />
                </label>

                <div className="buttons">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                        Edit Workout
                    </button>

                    <button onClick={(e) => handleCancel(e)}>Cancel</button>
                </div>
            </form>
        </aside>
    )
}