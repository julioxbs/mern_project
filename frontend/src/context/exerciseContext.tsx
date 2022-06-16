import React from 'react'

export const ExerciseContext = React.createContext({
    exerciseEdit: {} as String | null | any,
    setExerciseEdit: (val: any) => {},
});

export const ExerciseProvider = ({children}: any) => {
    const [exerciseEdit, setExerciseEdit] = React.useState({});
    
    return (
        <ExerciseContext.Provider value={{exerciseEdit, setExerciseEdit}}>
            {children}
        </ExerciseContext.Provider>
    )
}

