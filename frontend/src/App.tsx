import React from 'react'
import { FormCreateExercise } from './components/FormCreateExercise'
import { ListExercies } from './components/ListExercies'
import { Navbar } from './components/Navbar'
import { getExercises } from './api/api'

export const App = () => {
  const [exercises, setExercises] = React.useState([]);

  React.useEffect(() => {
    getExercises().then(data => setExercises(data));
  }, [exercises]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <ListExercies exercises={exercises} />
        <FormCreateExercise />
      </main>
    </>
  )
}