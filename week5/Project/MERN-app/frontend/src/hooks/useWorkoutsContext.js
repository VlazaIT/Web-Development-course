// useWorkoutsContext.js

import { WorkoutsContext, WorkoutDispatchContext } from '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkoutsState = () => {
  const context = useContext(WorkoutsContext)
  if (!context) {
    throw Error('useWorkoutsState must be used inside a WorkoutsContextProvider')
  }
  return context
}

export const useWorkoutsDispatch = () => {
  const context = useContext(WorkoutDispatchContext)
  if (!context) {
    throw Error('useWorkoutsDispatch must be used inside a WorkoutsContextProvider')
  }
  return context
}