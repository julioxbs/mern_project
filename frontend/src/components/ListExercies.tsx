import React from 'react';
import { delExercise } from '../api/api'
import { ExerciseContext } from '../context/exerciseContext'

interface Props {
    exercises: object[]
}

export const ListExercies = ({exercises}: Props) => {
    const { setExerciseEdit } = React.useContext(ExerciseContext);

    const convertDate = (date: string) => {
        const now = new Date();

        return now.toLocaleDateString('en-GB', date)
    }
    
    return (
        <section className="exercies-section">
            {exercises.map((exercise: any) => (
                <div key={exercise._id} className="exercise-info">
                    <div className="exercise-head">
                        <h4>{exercise.exerciceTitle}</h4>

                        <div className="buttons">
                            <button className='delete' onClick={() => delExercise(exercise._id)}>Delete</button>
                            <button onClick={() => setExerciseEdit(exercise)}>Edit</button>
                        </div>
                    </div>


                    <div className="exercise-body">
                        <p>
                            <b>Load(kg): </b>
                            {exercise.load}
                        </p>

                        <p>
                            <b>Number of Reps: </b>
                            {exercise.repetitions}
                        </p>

                        <p>{convertDate(exercise.date)}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
