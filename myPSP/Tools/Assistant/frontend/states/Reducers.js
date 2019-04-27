import { combineReducers } from 'redux'
import * as actions from './Actions.js'
import * as env from '../env'
import { prepopulatedTasks } from '../tests/helpers/TaskHelper'

const initialState = {
  tasks: (env.isProduction() ? {} : prepopulatedTasks())
}

function tasks (state = initialState.tasks, action) {
  switch (action.type) {
    case actions.ADD_TASK:
      // Fall through
    case actions.REMOVE_TASK:
      // Fall through
    case actions.UPDATE_TASK:
      // Fall through
    default:
      break
  }

  return Object.assign({}, state)
}

const appState = combineReducers({
  tasks
})

export default appState
