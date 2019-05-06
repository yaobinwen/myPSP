/**
 * TaskEntry
 *
 * An entry in the task list.
 */

import React, { Component } from 'react'
import { Button, Colors, Divider, Icon, MenuItem } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'
import { STATUS } from '../models/task'

const Style = {
  taskEntry: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  taskID: {
    color: Colors.BLUE3,
    marginLeft: '20px'
  },
  taskName: {
    color: Colors.BLUE3,
    marginLeft: '20px'
  }
}

class TaskTitleLine extends Component {
  render () {
    let task = this.props.task
    let taskID = task.id()
    let taskName = task.name()
    return [
      <Icon icon={'star-empty'} />,
      <span style={Style.taskID}>{taskID}</span>,
      <span style={Style.taskName}>{taskName}</span>
    ]
  }
}

function taskStatusRender (taskStatus) {
  return (
    <MenuItem
      key={taskStatus}
      label={taskStatus}
    />
  )
}

class TaskStatus extends Component {
  render () {
    return (
      <Select
        items={Object.keys(STATUS).map(name => STATUS[name])}
        itemRenderer={taskStatusRender}
      >
        <Button minimal>{this.props.task.status()}</Button>
      </Select>
    )
  }
}

class TaskMetaData extends Component {
  render () {
    return (
      <div>
        <TaskStatus task={this.props.task} />
      </div>
    )
  }
}

class TaskEntry extends Component {
  render () {
    return (
      <div style={Style.taskEntry}>
        <div>
          <TaskTitleLine task={this.props.task} />
        </div>
        <div>
          <TaskMetaData task={this.props.task} />
        </div>
        <Divider />
      </div>
    )
  }
}

export default TaskEntry
