export const getMovies = (title) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=2d60fcec`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: "FETCH",
        payload: res,
      });
    });
};

export const getMovie = (id) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=2d60fcec`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: "FETCH_MOVIE",
        payload: res,
      });
    });
};
