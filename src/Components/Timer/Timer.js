import React from "react";
import { connect } from "react-redux";
import {increment, decrement} from '../../redux/timerActions'
const Timer = ({ value, onIncrement, onDecrement }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignContent:  "center",
      width: "400px",
      margin: "10px auto",
      padding: "0px",
    }}
  >
    <button onClick={onDecrement} style={{border: "0", backgroundColor: "white" ,padding: "4px"}}>&#8722;</button>
    <p style={{ minWidth: "40px", textAlign: "center" , margin: "0px"}}>{value}</p>
    <button onClick={onIncrement} style={{border: "0", backgroundColor: "white",padding: "4px"}}>&#43;</button>
  </div>
);

const mapStateToProps = (state) => ({ value: state });

const mapDispatchToProps = dispatch =>({
  onIncrement: () => dispatch(increment(10)),
  onDecrement: () => dispatch(decrement(10)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Timer);
