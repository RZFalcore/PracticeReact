import { connect } from "react-redux";
import { increment, decrement } from "../../redux/timerActions";
import Timer from "./Timer";

const mapStateToProps = (state) => ({ value: state.value });

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment(10)),
  onDecrement: () => dispatch(decrement(10)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
