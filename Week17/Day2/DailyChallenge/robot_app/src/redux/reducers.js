const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCHFIELD":
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, robots: action.payload };

    default:
      return state;
  }
};

// WEBPACK FOOTER //
// ./src/reducers.js
