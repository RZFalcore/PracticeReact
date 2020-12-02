export function tasksFilter(tasks, filter) {
  return tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
}
