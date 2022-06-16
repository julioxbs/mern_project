import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ExerciseProvider } from './context/exerciseContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExerciseProvider>
      <App />
    </ExerciseProvider>
  </React.StrictMode>
)
