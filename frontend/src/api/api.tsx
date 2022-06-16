import React from 'react'

export const getExercises = async () => {
    try {
        const response = await fetch('http://localhost:8080/')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
};

export const createExercise = async (val: any) => {
    try {
        const response = await fetch('http://localhost:8080/work', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const editExercise = async (id: string, val: any) => {
    try {
        const response = await fetch(`http://localhost:8080/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const delExercise = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8080/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}