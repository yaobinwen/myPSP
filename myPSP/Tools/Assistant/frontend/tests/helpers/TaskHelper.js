import Task from '../../models/task'

export function prepopulatedTasks () {
  let tasks = {}
  for (let i = 0; i < 5; ++i) {
    tasks[i] = new Task({
      id: i.toString(),
      name: 'Fake task ' + i,
      status: 'Open'
    })
  }
  return tasks
}
