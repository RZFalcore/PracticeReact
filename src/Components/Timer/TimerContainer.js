import { connect } from "react-redux";
import { increment, decrement } from "../../redux/timerActions";
import Timer from "./Timer";

const mapStateToProps = (state) => ({
  value: state.value,
  step: state.step.value,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch(increment(step)),
  onDecrement: (step) => dispatch(decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
