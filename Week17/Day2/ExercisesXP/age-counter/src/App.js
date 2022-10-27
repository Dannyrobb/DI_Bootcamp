import logo from "./logo.svg";
import "./App.css";
import { increment, decrement } from "./redux/actions";
import { connect } from "react-redux";
function App(props) {
  return (
    <div className="App">
      <span>{props.age}</span>
      <button onClick={props.plus}>age up</button>
      <button onClick={props.minus}>age down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(increment()),
    minus: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
