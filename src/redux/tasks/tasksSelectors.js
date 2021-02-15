const getTasks = (state) => state.tasks.items;

const getLoading = (state) => state.tasks.loading;

const getFilter = (state) => state.tasks.filter;

const getVisibleTasks = (state) => {
  const tasks = getTasks(state);
  const filter = getFilter(state).trim().toLowerCase();

  return tasks.filter(({ text }) => text.toLowerCase().includes(filter));
};

const getTaskById = (state, id) => {
  const tasks = getTasks(state);
  return tasks.find((task) => task.id === id);
};

const tasksSelectors = { getLoading, getFilter, getVisibleTasks, getTaskById };

export default tasksSelectors;
