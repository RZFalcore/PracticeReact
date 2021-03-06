import { createSelector } from "@reduxjs/toolkit";

const getTasks = (state) => state.tasks.items;

const getLoading = (state) => state.tasks.loading;

const getFilter = (state) => state.tasks.filter;

//---------------------------------------------------------------------------
//! Memoised vers.
const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    return tasks.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// const getVisibleTasks = (state) => {
//   const tasks = getTasks(state);
//   const filter = getFilter(state).trim().toLowerCase();

//   return tasks.filter(({ text }) => text.toLowerCase().includes(filter));
// };
//---------------------------------------------------------------------------
//! Memoised vers.
const getTaskById = createSelector(
  [getTasks, (state, id) => id],
  (tasks, id) => {
    return tasks.find((task) => task.id === id);
  }
  );
  // const getTaskById = (state, id) => {
    //   const tasks = getTasks(state);
    //   return tasks.find((task) => task.id === id);
    // };
//---------------------------------------------------------------------------
    
const tasksSelectors = { getLoading, getFilter, getVisibleTasks, getTaskById };

export default tasksSelectors;
