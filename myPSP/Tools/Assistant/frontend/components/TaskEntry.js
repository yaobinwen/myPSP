/**
 * TaskEntry
 *
 * An entry in the task list.
 */

import React, { Component } from 'react'
import { Button, Colors, Divider, Icon } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

const Style = {
  taskEntry: {
    'margin-top': '10px',
    'margin-bottom': '10px'
  },
  taskID: {
    color: Colors.BLUE3,
    'margin-left': '20px'
  },
  taskName: {
    color: Colors.BLUE3,
    'margin-left': '20px'
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

function taskStatusRender () {
  return (
    <div>task status</div>
  )
}

class TaskStatus extends Component {
  render () {
    return (
      <Select
        items={[1, 2, 3]}
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
