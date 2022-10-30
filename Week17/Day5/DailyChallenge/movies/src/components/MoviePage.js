import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getMovie } from "../redux/actions";
import { Link } from "react-router-dom";
const Movie = (props) => {
  const params = useParams();
  props.searchMovie(params.id);
  console.log(props.movie.length);
  return (
    <div>
      {props.movie.length > 0 &&
        props.movie.map((movie) => {
          return (
            <div>
              <div className="movie">
                <img src={movie.Poster} />
                <div className="info">
                  <h1>{movie.Title}</h1>
                  <ul>
                    <li>Genre: {movie.Genre} </li>
                    <li>Released: {movie.Released}</li>
                    <li>Rated: {movie.Rated} </li>
                    <li>IMDB rating: {movie.imbdRating} </li>
                    <li>Director: {movie.Director} </li>
                    <li>Writers: {movie.Writer}</li>
                    <li>Actors: {movie.Actors}</li>
                  </ul>
                </div>
              </div>
              <div className="about">
                <h3>About</h3>
                <p>{movie.Plot}</p>
                <button>
                  <a href={`https://www.imdb.com/title/${movie.imdbID}`}>View on IMDB </a>
                </button>
                <button>
                  <Link to="/">Back to Search...</Link>
                </button>
              </div>
              <div />
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (id) => dispatch(getMovie(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
