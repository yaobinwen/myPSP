export function prepopulatedTasks () {
  let tasks = {}
  for (let i = 0; i < 5; ++i) {
    tasks[i] = {
      name: 'Fake task ' + i
    }
  }
  return tasks
}
