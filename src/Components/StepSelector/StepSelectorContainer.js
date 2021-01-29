import { connect } from "react-redux";
import { changeStep } from "../../redux/timerActions";
import StepSelector from "./StepSelector";

const mapStateToProps = (state) => ({
  value: state.timer.step,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (step) => dispatch(changeStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
