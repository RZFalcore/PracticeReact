import React from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";
import TaskListItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text, complited }) => (
      <TaskListItem
        key={id}
        text={text}
        complited={complited}
        onRemove={() => onRemoveTask(id)}
        onUpdate={() => onUpdateTask(id)}
      />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  tasks: state.tasks.items,
});

const mapDispatchToProps = {
  onRemoveTask: tasksActions.removeTask,
  onUpdateTask: tasksActions.toggleComplited,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
