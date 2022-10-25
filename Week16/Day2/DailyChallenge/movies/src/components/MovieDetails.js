import { connect } from "react-redux";

const MovieDetails = (props) => {
  return (
    <div style={{ display: "inline-block", width: "50%" }}>
      <h1>Movie Details</h1>
      <h2>Title: {props.details.title}</h2>
      <h2>Release Date: {props.details.releaseDate}</h2>
      <h2>Rating: {props.details.rating}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(MovieDetails);
