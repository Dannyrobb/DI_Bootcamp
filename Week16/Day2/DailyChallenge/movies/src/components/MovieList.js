import { connect } from "react-redux";
import { showDetails } from "../redux/actions";
const MovieList = (props) => {
  return (
    <div style={{ display: "inline-block", width: "50%" }}>
      <h1>Movie List</h1>
      {props.list.map((item, i) => {
        return (
          <div key={i}>
            {item.title}
            <button
              onClick={() => {
                props.showD(item);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.movieList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showD: (movie) => dispatch(showDetails(movie)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
