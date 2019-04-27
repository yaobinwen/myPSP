/**
 * TaskEntry
 *
 * An entry in the task list.
 */

import React, { Component } from 'react'
import { EditText } from '@blueprintjs/core'

class TaskEntry extends Component {
  render () {
    return (
      <div>
        <p>{this.props.taskName}</p>
      </div>
    )
  }
}

export default TaskEntry
