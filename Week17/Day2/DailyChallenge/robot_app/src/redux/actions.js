export const setSearchField = (text) => ({ type: "CHANGE_SEARCHFIELD", payload: text });

export const requestRobots = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: "FETCH",
        payload: res,
      });
    });
};
