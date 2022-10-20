const initState = {
  count: 0,
};

export const reducer_a = (state = initState, action = {}) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    case "DECREASE_COUNT":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
};
