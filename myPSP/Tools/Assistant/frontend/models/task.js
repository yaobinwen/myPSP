class Task {
  constructor (info) {
    // TODO(ywen): Make sure 'info' has all the required fields.
    this._id = info.id
    this._name = info.name
    this._status = info.status

    this.id = this.id.bind(this)
  }

  id () {
    return this._id
  }

  name () {
    return this._name
  }

  status () {
    return this._status
  }
}

export default Task
