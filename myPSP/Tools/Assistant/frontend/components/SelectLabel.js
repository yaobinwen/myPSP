import React, { Component } from 'react'
import { Button, MenuItem } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

function labelRender (label) {
  return <MenuItem key={label} label={label}/>
}

class SelectLabel extends Component {
  constructor (props) {
    super(props)

    this.labelRenderer = this.labelRenderer.bind(this)
    this.onLabelSelect = this.onLabelSelect.bind(this)

    this.state = {
      currentLabel: this.props.initialLabel
    }
  }

  labelRenderer (label, handleClick, modifiers) {
    return (
      <MenuItem
        active={modifiers.active}
        key={label}
        label={label}
        onClick={handleClick}
      />
    )
  }

  onLabelSelect (label) {
    this.setState({ currentLabel: label })
  }

  render () {
    return (
      <Select
        items={this.props.labels}
        itemRenderer={labelRender}
        onItemSelect={this.onLabelSelect}
      >
        <Button minimal>{this.state.currentLabel}</Button>
      </Select>
    )
  }
}

export default SelectLabel
