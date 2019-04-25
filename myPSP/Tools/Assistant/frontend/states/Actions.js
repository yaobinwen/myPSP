export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export function addTask (name) {
  return {
    type: ADD_TASK,
    name
  }
}

export function removeTask (id) {
  return {
    type: REMOVE_TASK,
    id
  }
}

export function updateTask (id, newName) {
  return {
    type: UPDATE_TASK,
    id,
    newName
  }
}
