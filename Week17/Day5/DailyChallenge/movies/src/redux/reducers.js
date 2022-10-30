const initState = { movies: [], movie: [] };

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH":
      console.log(action.payload.Search);
      return { ...state, movies: action.payload.Search };
    case "FETCH_MOVIE":
      console.log(action.payload);
      return { ...state, movie: [action.payload] };
    default:
      return state;
  }
};
