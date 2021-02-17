import React from "react";
import { connect } from "react-redux";
import Layout from "../Layout/Layout";
import TaskEditor from "../TaskEditor/TaskEditor";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";
import counterSelectors from "../../redux/counter/counterSelectors";
import counterActions from '../../redux/counter/counterActions'

function App({ counter,countIncrement }) {
  return (
    <div>
      <button type="button" onClick={() => countIncrement()}>
        Counter value: {counter}
      </button>
      <Layout>
        <TaskEditor />
        <Filter />
        <TaskList />
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: counterSelectors.getValue(state),
});

const mapDispatchToProps = {
  countIncrement: counterActions.increment
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
