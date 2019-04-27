import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../states/Actions'
import TaskEntry from './TaskEntry'

class _TaskList extends Component {
  render () {
    return (
      <div>
        <p>Task List</p>
        {
          Object.keys(this.props.tasks).map((taskID) => (
            <TaskEntry
              taskName={this.props.tasks[taskID].name}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (name) => dispatch(actions.addTask(name)),
    onRemoveTask: (id) => dispatch(actions.removeTask(id)),
    onUpdateTask: (id, newName) => dispatch(actions.updateTask(id, newName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_TaskList)
