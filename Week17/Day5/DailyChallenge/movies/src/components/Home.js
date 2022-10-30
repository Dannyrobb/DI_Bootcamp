import { connect } from "react-redux";
import { getMovies } from "../redux/actions";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Home(props) {
  const searchRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchMovies(searchRef.current.value);
    // console.log({ searched: searchRef.current.value});
    searchRef.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" ref={searchRef} placeholder="search for movie..." id="searchBox"></input>
        <button id="searchBTN">search</button>
      </form>
      <div>
        {props.movies.length > 0 &&
          props.movies.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <img src={movie.Poster}></img>
                <h3>
                  <Link to={`movie/${movie.imdbID}`}>
                    {movie.Title} - {movie.Year}
                  </Link>
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (movie) => dispatch(getMovies(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
