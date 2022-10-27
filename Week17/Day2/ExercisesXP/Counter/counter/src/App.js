import "./App.css";
import Counter from "./components/Counter";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App(props) {
  const incrementIfOdd = () => {
    if (props.count % 2 !== 0) {
      props.plus();
    }
  };

  const incrementAsync = () => {
    setTimeout(props.plus, 3000);
  };

  return (
    <div className="App">
      <Counter count={props.count} />
      <button onClick={props.plus}>plus</button>
      <button onClick={props.minus}>minus</button>
      <button onClick={incrementIfOdd}>increment if odd</button>
      <button onClick={incrementAsync}> async plus</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(increment()),
    minus: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
