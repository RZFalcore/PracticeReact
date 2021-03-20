import React from "react";
// import { connect } from "react-redux";
import Layout from "../Layout/Layout";
import TaskEditor from "../TaskEditor/TaskEditor";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";
import Counter from '../Counter/Counter'
// import counterSelectors from "../../redux/counter/counterSelectors";
// import counterActions from "../../redux/counter/counterActions";

const Tasks = () => (
  <div>
    <Layout>
      <TaskEditor />
      <Filter />
      <TaskList />
      <Counter  />
    </Layout>
  </div>
);
// const mapStateToProps = (state) => ({
//   counter: counterSelectors.getValue(state),
// });

// const mapDispatchToProps = {
//   countIncrement: counterActions.increment,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
export default Tasks;
